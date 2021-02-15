import { IQuestion } from "./question.interfaces";
import { IQuestionnaireFilling } from "./questionnaire-filling.interfaces";

export interface IQuestionAnswer {
    id: string
    value: string
    questionId: string
    questionnaireFillingId: string
    question?: IQuestion
    questionnaireFilling?: IQuestionnaireFilling
}
