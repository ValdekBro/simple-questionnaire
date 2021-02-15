import { ApiProperty } from "@nestjs/swagger"
import { Exclude, Expose, Type } from "class-transformer"
import { IsArray, IsNotEmpty, IsString } from "class-validator"

@Exclude()
export class CreateQuestionAnswerDto {
    @Expose()
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    questionId: string

    @Expose()
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    value: string
}

@Exclude()
export class CreateQuestionnaireAnswerDto {
    @Expose()
    @ApiProperty({ type: CreateQuestionAnswerDto, isArray: true })
    @IsNotEmpty()
    @IsArray()
    @Type(() => CreateQuestionAnswerDto)
    answers: CreateQuestionAnswerDto[]
}
