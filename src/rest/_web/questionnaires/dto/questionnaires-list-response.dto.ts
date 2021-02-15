import { ApiProperty } from "@nestjs/swagger"
import { Type } from "class-transformer"
import { IPaginationList, QuestionnaireDto } from "src/core"
import { QuestionnaireResponseDto } from "./get-questionnaire-response.dto"

export class QuestionnairesListResponseDto
implements IPaginationList<QuestionnaireDto> {
    @ApiProperty()
    count: number

    @ApiProperty({ isArray: true, type: QuestionnaireResponseDto })
    @Type(() => QuestionnaireResponseDto)
    items: QuestionnaireResponseDto[]
}
