import { Inject, Injectable } from "@nestjs/common"
import {
    IPagination,
    IPaginationList,
    IQuestion,
    IQuestionnaire,
    IQuestionnaireFilling,
    IQuestionnairesDomainService
} from "src/core"
import { ExtendedRepository } from "src/core/abstracts"
import { IQuestionaireFillingStorePayload } from "src/core/interfaces/params/questinnaires-fillings/questionaire-filling-store-payload.interface"
import { IQuestionaireStorePayload } from "src/core/interfaces/params/questionaries/questionaire-store-payload.interface"
import { DeepPartial } from "typeorm"
import { QuestionnairesRepository, QuestionsRepository } from "../repositories"
import { QuestionnairesFillingsService } from "./questionnaire-fillings.service"

@Injectable()
export class QuestionnairesService implements IQuestionnairesDomainService {
    constructor(
        private readonly questionnairesRepository: QuestionnairesRepository,
        private readonly questionsRepository: QuestionsRepository,

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

    public async statistics(): Promise<unknown> {
        return null
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
