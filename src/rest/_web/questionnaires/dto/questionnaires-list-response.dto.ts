import { ApiProperty } from "@nestjs/swagger"
import { Exclude, Type } from "class-transformer"
import { IPaginationList, QuestionnaireDto } from "src/core"
import { QuestionDto } from "src/core/dto/question.dto"

class QuestionnairesListItemQuestionDto implements QuestionDto {
    @ApiProperty()
    id: string

    @ApiProperty()
    content: string

    @Exclude()
    questionnaireId: string

    @Exclude()
    questionnaire?: any

    @Exclude()
    createDate: string
}

class QuestionnairesListItemDto implements QuestionnaireDto {
    @ApiProperty()
    id: string

    @ApiProperty()
    title: string

    @ApiProperty()
    createDate: string

    @ApiProperty({ isArray: true, type: QuestionnairesListItemQuestionDto })
    @Type(() => QuestionnairesListItemQuestionDto)
    questions?: QuestionnairesListItemQuestionDto[]
}

export class QuestionnairesListResponseDto
implements IPaginationList<QuestionnaireDto> {
    @ApiProperty()
    count: number

    @ApiProperty({ isArray: true, type: QuestionnairesListItemDto })
    @Type(() => QuestionnairesListItemDto)
    items: QuestionnairesListItemDto[]
}
