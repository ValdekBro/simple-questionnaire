import { ExtendedRepository } from "src/core/abstracts"
import { EntityRepository } from "typeorm"
import { Questionnaire } from "../entities/questionnaire.entity"

@EntityRepository(Questionnaire)
export class QuestionnairesRepository extends ExtendedRepository<
    Questionnaire
> {}
