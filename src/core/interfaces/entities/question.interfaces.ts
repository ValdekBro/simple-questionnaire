import { IQuestionnaire } from "./questionnaire.interfaces"

export interface IQuestion {
    id: string
    content: string
    questionnaireId: string
    questionnaire?: IQuestionnaire
    createDate: string
}
