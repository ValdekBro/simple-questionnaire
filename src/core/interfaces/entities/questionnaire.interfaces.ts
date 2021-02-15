import { IQuestion } from "./question.interfaces"

export interface IQuestionnaire {
    id: string
    title: string
    createDate: string
    questions?: IQuestion[]
}
