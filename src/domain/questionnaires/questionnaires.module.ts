import { Global, Module } from "@nestjs/common"
import {
    provideClass,
    provideCustomRepository,
    QUESTIONNAIRES_DOMAIN_SERVICE
} from "src/core"
import {
    QuestionnairesFillingsRepository,
    QuestionnairesRepository,
    QuestionsAnswersRepository,
    QuestionsRepository
} from "./repositories"
import {
    QuestionnairesFillingsService,
    QuestionnairesService
} from "./services"

@Global()
@Module({
    providers: [
        QuestionnairesService,
        QuestionnairesFillingsService,

        provideCustomRepository(
            "QuestionnairesRepository",
            QuestionnairesRepository
        ),
        provideCustomRepository(
            "QuestionnairesFillingsRepository",
            QuestionnairesFillingsRepository
        ),
        provideCustomRepository("QuestionsRepository", QuestionsRepository),
        provideCustomRepository(
            "QuestionsAnswersRepository",
            QuestionsAnswersRepository
        ),

        provideClass(QUESTIONNAIRES_DOMAIN_SERVICE, QuestionnairesService)
    ],
    exports: [QUESTIONNAIRES_DOMAIN_SERVICE]
})
export class DQuestionnairesModule {}
