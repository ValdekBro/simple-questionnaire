import { Controller } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import { WebQuestionnairesService } from "../services/web-questionnaires.service"

@ApiTags("Web|Questionnaires")
@Controller("web/questionnaires")
export class WebQuestionnairesController {
    constructor(
        private readonly questionnairesService: WebQuestionnairesService
    ) {}


}
