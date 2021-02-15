import {
    Question,
    QuestionAnswer,
    Questionnaire,
    QuestionnaireFilling
} from "src/domain/questionnaires/entities"

const QUESTIONNAIRES_ENTITIES = [
    Questionnaire,
    Question,
    QuestionnaireFilling,
    QuestionAnswer
]

export const ENTITIES = [...QUESTIONNAIRES_ENTITIES]
