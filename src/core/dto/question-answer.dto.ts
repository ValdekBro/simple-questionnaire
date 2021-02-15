import { ApiProperty } from "@nestjs/swagger"
import { IQuestionAnswer } from "../interfaces"
import { QuestionDto } from "./question.dto"
import { QuestionnaireFillingDto } from "./questionnaire-filling.dto"

export class QuestionAnswerDto implements IQuestionAnswer {
    @ApiProperty()
    id: string

    @ApiProperty()
    value: string

    @ApiProperty()
    questionId: string

    @ApiProperty({ type: QuestionDto })
    question?: QuestionDto

    @ApiProperty()
    questionnaireFillingId: string

    @ApiProperty({ type: QuestionnaireFillingDto })
    questionnaireFilling?: QuestionnaireFillingDto
}
