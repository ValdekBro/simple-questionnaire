import { ApiProperty } from "@nestjs/swagger"
import { Exclude, Expose, Type } from "class-transformer"
import { IsArray, IsNotEmpty, IsString } from "class-validator"

@Exclude()
export class CreateQuestionDto {
    @Expose()
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    content: string
}

@Exclude()
export class CreateQuestionnaireDto {
    @Expose()
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    title: string

    @Expose()
    @ApiProperty({ type: CreateQuestionDto, isArray: true })
    @IsNotEmpty()
    @IsArray()
    @Type(() => CreateQuestionDto)
    questions: CreateQuestionDto[]
}
