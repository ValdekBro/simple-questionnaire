import { ApiProperty } from "@nestjs/swagger"

export class PaginationDto {
    @ApiProperty()
    limit: number

    @ApiProperty()
    page: number

    @ApiProperty()
    sortField: string

    @ApiProperty()
    sort: string

    @ApiProperty()
    skip: number

    @ApiProperty()
    searchString?: string
}
