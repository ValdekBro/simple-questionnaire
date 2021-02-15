import { ApiProperty } from "@nestjs/swagger"
import { Exclude, Type } from "class-transformer"
import { QuestionAnswerDto, QuestionnaireFillingDto } from "src/core"

export class CreateQuestionAnswerResponseDto implements QuestionAnswerDto {
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

export class CreateQuestionnaireAnswerResponseDto implements QuestionnaireFillingDto {
    @ApiProperty()
    id: string

    @ApiProperty()
    questionnaireId: string

    @ApiProperty()
    createDate: string

    @Exclude()
    questionnaire?: any

    @ApiProperty({ isArray: true, type: CreateQuestionAnswerResponseDto })
    @Type(() => CreateQuestionAnswerResponseDto)
    answers?: CreateQuestionAnswerResponseDto[]

}
