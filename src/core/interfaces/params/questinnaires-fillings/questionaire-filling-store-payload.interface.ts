import { IQuestionAnswerStorePaylaod } from "./question-answer-store-payload.interface"

export interface IQuestionaireFillingStorePayload {
    questionnaireId: string
    answers: IQuestionAnswerStorePaylaod[]
}
