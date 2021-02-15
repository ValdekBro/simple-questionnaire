import { Injectable } from "@nestjs/common"
import {
    IPagination,
    IPaginationList,
    IQuestionAnswer,
    IQuestionnaireFilling
} from "src/core"
import { IQuestionaireFillingStorePayload } from "src/core/interfaces/params/questinnaires-fillings/questionaire-filling-store-payload.interface"
import { IQuestionairesFillingsListParams } from "src/core/interfaces/params/questinnaires-fillings/questionaires-fillings-list-params.interface"
import { DeepPartial } from "typeorm"
import { QuestionsAnswersRepository } from "../repositories"
import { QuestionnairesFillingsRepository } from "../repositories/questionnaires-fillings.repository"

@Injectable()
export class QuestionnairesFillingsService {
    constructor(
        private readonly questionnairesFillingsRepository: QuestionnairesFillingsRepository,
        private readonly questionsAnswersRepository: QuestionsAnswersRepository
    ) {}

    // TODO: make transactional
    public async store(
        payload: IQuestionaireFillingStorePayload
    ): Promise<IQuestionnaireFilling> {
        // Filling
        const questionaireFillingData: DeepPartial<IQuestionnaireFilling> = {
            questionnaireId: payload.questionnaireId
        }
        const questionaireFilling = await this.questionnairesFillingsRepository.save(
            questionaireFillingData
        )

        // Answers
        const answersData = payload.answers.map(
            (answer): DeepPartial<IQuestionAnswer> => ({
                questionId: answer.questionId,
                value: answer.value,
                questionnaireFillingId: questionaireFilling.id
            })
        )
        const answers = await this.questionsAnswersRepository.save(answersData)
        questionaireFilling.answers = answers

        return questionaireFilling
    }

    async getMany(
        params: IQuestionairesFillingsListParams,
        pagination?: IPagination
    ): Promise<IPaginationList<IQuestionnaireFilling>> {
        const fillingsQuery = this.questionnairesFillingsRepository
            .createQueryBuilder("fillings")
            .leftJoinAndSelect("fillings.answers", "asnwers")

        if (params && params.questionnaireId)
            fillingsQuery.andWhere(
                "fillings.questionnaireId = :questionnaireId",
                { questionnaireId: params.questionnaireId }
            )

        const questionnairesFillings = await this.questionnairesFillingsRepository.getManyAndPaginate(
            fillingsQuery,
            pagination
        )
        return questionnairesFillings
    }
}
