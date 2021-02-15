import { ExtendedRepository } from "src/core/abstracts"
import { EntityRepository } from "typeorm"
import { Question } from "../entities/question.entity"

@EntityRepository(Question)
export class QuestionsRepository extends ExtendedRepository<Question> {}
