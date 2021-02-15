import { ApiProperty } from "@nestjs/swagger"
import { Type } from "class-transformer"
import { IPaginationList } from "src/core"
import { QuestionnaireAnswerResponseDto } from "./get-questionnaire-answer-response.dto"

export class QuestionnairesAnswersListResponseDto
implements IPaginationList<QuestionnaireAnswerResponseDto> {
    @ApiProperty()
    count: number

    @ApiProperty({ isArray: true, type: QuestionnaireAnswerResponseDto })
    @Type(() => QuestionnaireAnswerResponseDto)
    items: QuestionnaireAnswerResponseDto[]
}
