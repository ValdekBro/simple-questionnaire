import { applyDecorators } from "@nestjs/common"
import { ApiImplicitQuery } from "@nestjs/swagger/dist/decorators/api-implicit-query.decorator"

export function ApiPagination(): MethodDecorator {
    return applyDecorators(
        ApiImplicitQuery({ name: "limit", type: Number, required: false }),
        ApiImplicitQuery({ name: "page", type: Number, required: false }),
        ApiImplicitQuery({ name: "sortField", type: String, required: false }),
        ApiImplicitQuery({
            name: "sort",
            type: String,
            description: "ASC | DESC",
            required: false
        })
    )
}
