import { EntityRepository } from "typeorm"
import { ExtendedRepository } from "src/core"
import { Questionnaire } from "../entities"

@EntityRepository(Questionnaire)
export class QuestionnairesRepository extends ExtendedRepository<
    Questionnaire
> {}
