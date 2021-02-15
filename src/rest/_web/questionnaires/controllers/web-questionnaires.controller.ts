import { Body, Controller, Get, Param, Post } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import { IPagination } from "src/core"
import { ReqPagination } from "src/core/decorators"
import { DocAcceptsBody } from "src/core/decorators/accepts-body.decorator"
import { DocPagination } from "src/core/decorators/api-pagination-query.decorator"
import { Guard } from "src/core/decorators/guards.decorator"
import { DocSuccess } from "src/core/decorators/success.decorator"
import { TransformResult } from "src/core/decorators/transformResult.decorator"
import { CreateQuestionnaireDto } from "../dto"
import { CreateQuestionnaireAnswerResponseDto } from "../dto/create-questionnaire-answer-response.dto"
import { CreateQuestionnaireAnswerDto } from "../dto/create-questionnaire-answer.dto"
import { CreateQuestionnaireResponseDto } from "../dto/create-questionnaire-response.dto"
import { QuestionnaireResponseDto } from "../dto/get-questionnaire-response.dto"
import { QuestionnairesAnswersListResponseDto } from "../dto/questionnaires-answers-list-response.dto"
import { QuestionnairesListResponseDto } from "../dto/questionnaires-list-response.dto"
import { QuestionnairesStatisticsResponseDto } from "../dto/questionnaires-statistics-response.dto"
import { SecretKeyGuard } from "../guards"
import { WebQuestionnairesService } from "../services/web-questionnaires.service"

@ApiTags("Web | Questionnaires")
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
     */
    @Get("/statistics")
    @Guard(SecretKeyGuard)
    @DocSuccess(
        "Questionnaires statistic fetched successfully",
        QuestionnairesStatisticsResponseDto
    )
    @TransformResult(QuestionnairesStatisticsResponseDto)
    async getStatistics(): Promise<QuestionnairesStatisticsResponseDto> {
        return this.questionnairesService.getStatistics()
    }

    /**
     * Get questionnaire
     * @param questionnaireId ID of questonnaire to fetch
     */
    @Get("/:questionnaireId")
    @DocSuccess("Questionnaire fetched successfully", QuestionnaireResponseDto)
    @TransformResult(QuestionnaireResponseDto)
    async getOne(
        @Param("questionnaireId") questionnaireId: string
    ): Promise<QuestionnaireResponseDto> {
        return this.questionnairesService.getOne(questionnaireId)
    }

    // ANSWERS

    /**
     * Create questionnaire
     * @param dto data to create questionnaire
     */
    @Post("/:questionnaireId/answers")
    @DocAcceptsBody(CreateQuestionnaireAnswerDto)
    @DocSuccess(
        "Questionnaire asnwer created successfully",
        CreateQuestionnaireAnswerResponseDto,
        201
    )
    @TransformResult(CreateQuestionnaireAnswerResponseDto)
    async storeAnswer(
        @Param("questionnaireId") questionnaireId: string,
        @Body() dto: CreateQuestionnaireAnswerDto
    ): Promise<CreateQuestionnaireAnswerResponseDto> {
        return this.questionnairesService.storeAnswer({
            questionnaireId,
            ...dto
        })
    }

    /**
     * Get questionnaires
     */
    @Get("/:questionnaireId/answers")
    @DocPagination()
    @Guard(SecretKeyGuard)
    @DocSuccess(
        "Questionnaires fetched successfully",
        QuestionnairesAnswersListResponseDto
    )
    @TransformResult(QuestionnairesAnswersListResponseDto)
    async getManyAnswers(
        @Param("questionnaireId") questionnaireId: string,
        @ReqPagination() pagination?: IPagination
    ): Promise<QuestionnairesAnswersListResponseDto> {
        return this.questionnairesService.getAnswers(
            questionnaireId,
            pagination
        )
    }
}
