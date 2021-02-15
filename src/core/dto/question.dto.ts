import { ApiProperty } from "@nestjs/swagger"
import { IQuestion } from "../interfaces"
import { QuestionnaireDto } from "./questionnaire.dto"

export class QuestionDto implements IQuestion {
    @ApiProperty()
    id: string

    @ApiProperty()
    content: string

    @ApiProperty()
    questionnaireId: string

    @ApiProperty({ type: QuestionnaireDto })
    questionnaire?: QuestionnaireDto

    @ApiProperty()
    createDate: string
}
