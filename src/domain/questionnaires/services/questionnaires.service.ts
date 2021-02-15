import { Injectable } from "@nestjs/common"
import {
    IPagination,
    IPaginationList,
    IQuestion,
    IQuestionaireFillingStorePayload,
    IQuestionaireStatistics,
    IQuestionaireStorePayload,
    IQuestionnaire,
    IQuestionnaireFilling,
    IQuestionnairesDomainService
} from "src/core"
import { DeepPartial } from "typeorm"
import {
    QuestionnairesFillingsRepository,
    QuestionnairesRepository,
    QuestionsRepository
} from "../repositories"
import { QuestionnairesFillingsService } from "./questionnaire-fillings.service"

@Injectable()
export class QuestionnairesService implements IQuestionnairesDomainService {
    constructor(
        private readonly questionnairesRepository: QuestionnairesRepository,
        private readonly questionsRepository: QuestionsRepository,
        private readonly questionnairesFillingsRepository: QuestionnairesFillingsRepository,

        private readonly questionnairesFillingsService: QuestionnairesFillingsService
    ) {}

    // TODO: make transactional
    public async store(
        payload: IQuestionaireStorePayload
    ): Promise<IQuestionnaire> {
        // Questionnary
        const questionnaireData: DeepPartial<IQuestionnaire> = {
            title: payload.title
        }
        const questionnaire = await this.questionnairesRepository.save(
            questionnaireData
        )

        // Questions
        const questionsData = payload.questions.map(
            (question): DeepPartial<IQuestion> => ({
                content: question.content,
                questionnaireId: questionnaire.id
            })
        )
        const questions = await this.questionsRepository.save(questionsData)
        questionnaire.questions = questions

        return questionnaire
    }

    public async getOne(qiestionaireId: string): Promise<IQuestionnaire> {
        const questionary = await this.questionnairesRepository.findOneOrError(
            qiestionaireId,
            {
                relations: ["questions"]
            }
        )
        return questionary
    }

    public async getMany(
        pagination?: IPagination
    ): Promise<IPaginationList<IQuestionnaire>> {
        const qiestionairesQuery = this.questionnairesRepository
            .createQueryBuilder("questionaries")
            .leftJoinAndSelect("questionaries.questions", "questions")

        const qiestionaires = await this.questionnairesRepository.getManyAndPaginate(
            qiestionairesQuery,
            pagination
        )
        return qiestionaires
    }

    public async getStatistics(): Promise<IQuestionaireStatistics> {
        const answersCountRaw: Array<{
            questionnaireId: string
            count: string
        }> = await this.questionnairesFillingsRepository
            .createQueryBuilder("fillings")
            .select("COUNT(fillings.questionnaireId)", "count")
            .addSelect("fillings.questionnaireId", "questionnaireId")
            .groupBy("fillings.questionnaireId")
            .getRawMany()

        const answersCount = answersCountRaw.map(item => ({
            questionnaireId: item.questionnaireId,
            count: parseInt(item.count, 10)
        }))

        const questionnairesWithAnswersCount = answersCount.reduce(
            (count, current) => count + Number(current.count > 0),
            0
        )

        return {
            answersCount,
            questionnairesWithAnswersCount: questionnairesWithAnswersCount,
            questionnairesWithoutAnswersCount:
                answersCount.length - questionnairesWithAnswersCount
        }
    }

    async storeAnswer(
        payload: IQuestionaireFillingStorePayload
    ): Promise<IQuestionnaireFilling> {
        return this.questionnairesFillingsService.store(payload)
    }

    async getAnswers(
        questionnaireId: string,
        pagination?: IPagination
    ): Promise<IPaginationList<IQuestionnaireFilling>> {
        return this.questionnairesFillingsService.getMany(
            {
                questionnaireId
            },
            pagination
        )
    }
}
