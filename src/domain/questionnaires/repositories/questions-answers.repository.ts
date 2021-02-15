import { ExtendedRepository } from "src/core/abstracts"
import { EntityRepository } from "typeorm"
import { QuestionAnswer } from "../entities/question-answer.entity"

@EntityRepository(QuestionAnswer)
export class QuestionsAnswersRepository extends ExtendedRepository<
    QuestionAnswer
> {}
