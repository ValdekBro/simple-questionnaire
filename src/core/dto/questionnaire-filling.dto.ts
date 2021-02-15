import { ApiProperty } from "@nestjs/swagger"
import { IQuestionnaireFilling } from "../interfaces"
import { QuestionAnswerDto } from "./question-answer.dto"
import { QuestionnaireDto } from "./questionnaire.dto"

export class QuestionnaireFillingDto implements IQuestionnaireFilling {
    @ApiProperty()
    id: string

    @ApiProperty()
    questionnaireId: string

    @ApiProperty()
    createDate: string

    @ApiProperty({ type: QuestionnaireDto })
    questionnaire?: QuestionnaireDto

    @ApiProperty({ isArray: true, type: QuestionAnswerDto })
    answers?: QuestionAnswerDto[]
}
