import { EntityRepository } from "typeorm"
import { ExtendedRepository } from "src/core"
import { QuestionnaireFilling } from "../entities"

@EntityRepository(QuestionnaireFilling)
export class QuestionnairesFillingsRepository extends ExtendedRepository<
    QuestionnaireFilling
> {}
