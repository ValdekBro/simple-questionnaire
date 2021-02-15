import { IQuestionnaire, IQuestionnaireFilling } from "../entities"
import { IQuestionaireFillingStorePayload } from "../params/questinnaires-fillings/questionaire-filling-store-payload.interface"
import { IQuestionaireStorePayload } from "../params/questionaries/questionaire-store-payload.interface"
import { IPagination, IPaginationList } from "../systems"

export interface IQuestionnairesDomainService {
    store(payload: IQuestionaireStorePayload): Promise<IQuestionnaire>

    getOne(qiestionaireId: string): Promise<IQuestionnaire>

    getMany(pagination?: IPagination): Promise<IPaginationList<IQuestionnaire>>

    // FIXME: unknown
    statistics(): Promise<unknown>

    storeAnswer(
        payload: IQuestionaireFillingStorePayload
    ): Promise<IQuestionnaireFilling>

    getAnswers(
        questionnaireId: string,
        pagination?: IPagination
    ): Promise<IPaginationList<IQuestionnaireFilling>>
}
