import { Module } from "@nestjs/common"
import { WebQuestionnairesController } from "./controllers"
import { WebQuestionnairesService } from "./services"

@Module({
    controllers: [WebQuestionnairesController],
    providers: [WebQuestionnairesService]
})
export class WebQuestionnairesModule {}
