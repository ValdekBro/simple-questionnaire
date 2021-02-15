import { IQuestion } from "src/core"
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn
} from "typeorm"
import { Questionnaire } from "./questionnaire.entity"

@Entity("questions")
export class Question implements IQuestion {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ type: "text", nullable: false })
    content: string

    @ManyToOne(() => Questionnaire)
    @JoinColumn({ name: "questionnaireId" })
    questionnaire?: Questionnaire
    @Column({ nullable: false })
    questionnaireId: string

    @CreateDateColumn({ type: "timestamp", default: () => "LOCALTIMESTAMP" })
    createDate: string
}
