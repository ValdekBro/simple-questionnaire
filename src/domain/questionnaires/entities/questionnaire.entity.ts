import { IQuestionnaire } from "src/core"
import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn
} from "typeorm"
import { Question } from "./question.entity"

@Entity("questionnaires")
export class Questionnaire implements IQuestionnaire {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ type: "text", nullable: false })
    title: string

    @OneToMany(
        () => Question,
        question => question.questionnaire
    )
    questions?: Question[]

    @CreateDateColumn({ type: "timestamp", default: () => "LOCALTIMESTAMP" })
    createDate: string
}
