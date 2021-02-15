import { ExtendedRepository } from "src/core/abstracts"
import { EntityRepository } from "typeorm"
import { QuestionnaireFilling } from "../entities/questionnaire-filling.entity"

@EntityRepository(QuestionnaireFilling)
export class QuestionnairesFillingsRepository extends ExtendedRepository<
    QuestionnaireFilling
> {}
