import { Body, Controller, Get, Post } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import { IPagination } from "src/core"
import { ReqPagination } from "src/core/decorators"
import { DocAcceptsBody } from "src/core/decorators/accepts-body.decorator"
import { DocPagination } from "src/core/decorators/api-pagination-query.decorator"
import { Guard } from "src/core/decorators/guards.decorator"
import { DocSuccess } from "src/core/decorators/success.decorator"
import { TransformResult } from "src/core/decorators/transformResult.decorator"
import { CreateQuestionnaireDto } from "../dto"
import { CreateQuestionnaireResponseDto } from "../dto/create-questionnaire-response.dto"
import { QuestionnairesListResponseDto } from "../dto/questionnaires-list-response.dto"
import { SecretKeyGuard } from "../guards"
import { WebQuestionnairesService } from "../services/web-questionnaires.service"

@ApiTags("Web|Questionnaires")
@Controller("web/questionnaires")
export class WebQuestionnairesController {
    constructor(
        private readonly questionnairesService: WebQuestionnairesService
    ) {}

    /**
     * Create questionnaire
     * @param dto data to create questionnaire
     */
    @Post("/")
    @DocAcceptsBody(CreateQuestionnaireDto)
    @Guard(SecretKeyGuard)
    @DocSuccess(
        "Questionnaire created successfully",
        CreateQuestionnaireResponseDto,
        201
    )
    @TransformResult(CreateQuestionnaireResponseDto)
    async store(
        @Body() dto: CreateQuestionnaireDto
    ): Promise<CreateQuestionnaireResponseDto> {
        return this.questionnairesService.store(dto)
    }

    /**
     * Get questionnaires
     * @param dto data to create questionnaire
     */
    @Get("/")
    @DocPagination()
    @Guard(SecretKeyGuard)
    @DocSuccess(
        "Questionnaires fetched successfully",
        QuestionnairesListResponseDto
    )
    @TransformResult(QuestionnairesListResponseDto)
    async getMany(
        @ReqPagination() pagination?: IPagination
    ): Promise<QuestionnairesListResponseDto> {
        return this.questionnairesService.getMany(pagination)
    }

    /**
     * Get questionnaires statistics
     * TODO:
     */

}