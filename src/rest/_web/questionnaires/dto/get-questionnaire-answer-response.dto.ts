import { ApiProperty } from "@nestjs/swagger"
import { Exclude, Type } from "class-transformer"
import { QuestionAnswerDto, QuestionnaireFillingDto } from "src/core"
class QuestionnairesQuestionAnswerDto implements QuestionAnswerDto {
    @Exclude()
    id: string

    @ApiProperty()
    value: string

    @ApiProperty()
    questionId: string

    @Exclude()
    question?: any

    @Exclude()
    questionnaireFillingId: string

    @Exclude()
    questionnaireFilling?: any
}

export class QuestionnaireAnswerResponseDto implements QuestionnaireFillingDto {
    @ApiProperty()
    id: string

    @ApiProperty()
    questionnaireId: string

    @ApiProperty()
    createDate: string

    @Exclude()
    questionnaire?: any

    @ApiProperty({ isArray: true, type: QuestionnairesQuestionAnswerDto })
    @Type(() => QuestionnairesQuestionAnswerDto)
    answers?: QuestionnairesQuestionAnswerDto[]
}
