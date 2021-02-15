import { Global, Module } from "@nestjs/common"
import {
    QuestionnairesFillingsRepository,
    QuestionnairesRepository,
    QuestionsAnswersRepository,
    QuestionsRepository
} from "./repositories"

@Global()
@Module({
    providers: [
        QuestionnairesFillingsRepository,
        QuestionsRepository,
        QuestionsAnswersRepository,
        QuestionnairesRepository
    ]
})
export class DQuestionnairesModule {}
