import { IQuestionAnswer } from "src/core"
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn
} from "typeorm"
import { Question } from "./question.entity"
import { QuestionnaireFilling } from "./questionnaire-filling.entity"

@Entity("questions-answers")
export class QuestionAnswer implements IQuestionAnswer {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ nullable: true })
    value: string

    @ManyToOne(() => Question)
    @JoinColumn({ name: "questionId" })
    question?: Question
    @Column({ nullable: false })
    questionId: string

    @ManyToOne(() => QuestionnaireFilling)
    @JoinColumn({ name: "questionnaireFillingId" })
    questionnaireFilling?: QuestionnaireFilling
    @Column({ nullable: false })
    questionnaireFillingId: string
}
