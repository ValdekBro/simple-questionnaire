import { Module } from "@nestjs/common"
import { WebQuestionnairesController } from "./controllers"
import { WebQuestionnairesService } from "./services/web-questionnaires.service"

@Module({
    controllers: [WebQuestionnairesController],
    providers: [WebQuestionnairesService]
})
export class WebQuestionnairesModule {}
