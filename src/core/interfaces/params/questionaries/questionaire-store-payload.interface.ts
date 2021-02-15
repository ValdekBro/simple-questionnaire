import { IQuestionStorePaylaod } from "./question-store-payload.interface"

export interface IQuestionaireStorePayload {
    title: string
    questions: IQuestionStorePaylaod[]
}
