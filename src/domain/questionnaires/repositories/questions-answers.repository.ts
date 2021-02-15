import { ExtendedRepository } from "src/core"
import { EntityRepository } from "typeorm"
import { QuestionAnswer } from "../entities"

@EntityRepository(QuestionAnswer)
export class QuestionsAnswersRepository extends ExtendedRepository<
    QuestionAnswer
> {}
