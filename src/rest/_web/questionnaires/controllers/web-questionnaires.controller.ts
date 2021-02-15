import { Body, Controller, Get, Param, Post } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import {
    DocAcceptsBody,
    DocPagination,
    DocSuccess,
    Guard,
    IPagination,
    ReqPagination,
    TransformResult
} from "src/core"
import {
    CreateQuestionnaireAnswerDto,
    CreateQuestionnaireAnswerResponseDto,
    CreateQuestionnaireDto,
    CreateQuestionnaireResponseDto,
    QuestionnaireResponseDto,
    QuestionnairesAnswersListResponseDto,
    QuestionnairesListResponseDto,
    QuestionnairesStatisticsResponseDto
} from "../dto"
import { SecretKeyGuard } from "../guards"
import { WebQuestionnairesService } from "../services"

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
