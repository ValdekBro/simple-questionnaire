import { ApiProperty } from "@nestjs/swagger"
import { IQuestionnaire } from "../interfaces"
import { QuestionDto } from "./question.dto"

export class QuestionnaireDto implements IQuestionnaire {
    @ApiProperty()
    id: string

    @ApiProperty()
    title: string

    @ApiProperty()
    createDate: string

    @ApiProperty({ isArray: true, type: QuestionDto })
    questions?: QuestionDto[]
}
