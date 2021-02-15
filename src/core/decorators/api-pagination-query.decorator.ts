import { applyDecorators } from "@nestjs/common"
import { ApiQuery } from "@nestjs/swagger"

export function DocPagination(
    sortingFields?: string[],
    searchingFields?: string[]
): MethodDecorator {
    const searchingFieldsDescription = `Searching by: ${
        searchingFields ? searchingFields.join(", ") : null
    }`
    const decoratorsToApply = [
        ApiQuery({ name: "limit", type: Number, required: false }),
        ApiQuery({ name: "page", type: Number, required: false })
    ]

    if (sortingFields)
        decoratorsToApply.push(
            ApiQuery({
                name: "sortField",
                type: String,
                required: false,
                enum: sortingFields
            }),
            ApiQuery({
                name: "sort",
                type: String,
                description: "ASC | DESC",
                required: false
            })
        )

    if (searchingFields)
        decoratorsToApply.push(
            ApiQuery({
                name: "searchString",
                type: String,
                description: searchingFieldsDescription,
                required: false
            })
        )

    return applyDecorators(...decoratorsToApply)
}

// export const ApiImplictPagination = applyDecorators(
// 	ApiImplicitQuery({ name: 'limit', type: Number, required: false }),
// 	ApiImplicitQuery({ name: 'page', type: Number, required: false }),
// 	ApiImplicitQuery({ name: 'sortField', type: String, required: false }),
// 	ApiImplicitQuery({ name: 'sort', type: String, description: 'ASC | DESC', required: false }),
// )
