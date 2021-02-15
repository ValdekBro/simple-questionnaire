import { IQuestionAnswer } from "./question-answer.interfaces"
import { IQuestionnaire } from "./questionnaire.interfaces"

export interface IQuestionnaireFilling {
    id: string
    questionnaireId: string
    createDate: string
    questionnaire?: IQuestionnaire
    answers?: IQuestionAnswer[]
}
