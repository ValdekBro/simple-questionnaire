import { ApiProperty } from "@nestjs/swagger"
import { Type } from "class-transformer"
import { IQuestionaireStatistics } from "src/core"
class AnswersCount {
    @ApiProperty()
    questionnaireId: string

    @ApiProperty()
    count: number
}

export class QuestionnairesStatisticsResponseDto
implements IQuestionaireStatistics {
    @ApiProperty({ isArray: true, type: AnswersCount })
    @Type(() => AnswersCount)
    answersCount: AnswersCount[]

    @ApiProperty()
    questionnairesWithAnswersCount: number

    @ApiProperty()
    questionnairesWithoutAnswersCount: number
}
