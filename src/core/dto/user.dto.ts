import { ApiProperty } from "@nestjs/swagger"
import { Expose } from "class-transformer"

export class UserDto {
    @ApiProperty()
    id: number

    @ApiProperty()
    email: string

    @ApiProperty()
    isActive: boolean

    @ApiProperty()
    isDeleted: boolean

    @ApiProperty()
    createDate: string

    @ApiProperty()
    updateDate: string
}

export class UsersListDto {
    @Expose()
    @ApiProperty({
        isArray: true,
        type: UserDto,
    })
    items: UserDto[]

    @Expose()
    @ApiProperty()
    count: number
}
