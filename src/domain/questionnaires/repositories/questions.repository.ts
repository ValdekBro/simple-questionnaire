import { ExtendedRepository } from "src/core"
import { EntityRepository } from "typeorm"
import { Question } from "../entities"

@EntityRepository(Question)
export class QuestionsRepository extends ExtendedRepository<Question> {}
