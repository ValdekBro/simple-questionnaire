import { IQuestionnaire } from "../entities"
import { IQuestionaireStorePayload } from "../params/questionaries/questionaire-store-payload.interface"
import { IPagination, IPaginationList } from "../systems"

export interface IQuestionnairesDomainService {
    store(payload: IQuestionaireStorePayload): Promise<IQuestionnaire>

    getOne(qiestionaireId: string): Promise<IQuestionnaire>

    getMany(pagination: IPagination): Promise<IPaginationList<IQuestionnaire>>

    // FIXME: unknown
    statistics(): Promise<unknown>
}
