import { SelectQueryBuilder } from "typeorm"
import { IPagination } from "../interfaces"

export const paginateAndGetMany = async <T>(
    oldQuery: SelectQueryBuilder<T>,
    pagination: IPagination,
    fieldPrefix = "",
): Promise<[T[], number]> => {
    let query = oldQuery.skip(pagination.skip).take(pagination.limit)

    if (pagination.sortField) {
        const sort: "ASC" | "DESC" = pagination.sort === "ASC" ? "ASC" : "DESC"
        query = query.orderBy(fieldPrefix + "." + pagination.sortField, sort)
    }

    const [items, count] = await query.getManyAndCount()
    return [items, count]
}
