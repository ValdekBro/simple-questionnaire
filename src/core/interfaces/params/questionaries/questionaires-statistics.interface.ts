export interface IQuestionaireStatistics {
    answersCount: {
        questionnaireId: string,
        count: number
    }[]
    questionnairesWithAnswersCount: number
    questionnairesWithoutAnswersCount: number
}
