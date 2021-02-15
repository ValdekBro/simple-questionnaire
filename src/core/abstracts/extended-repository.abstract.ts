import { NotFoundException } from "@nestjs/common"
import {
    FindConditions,
    FindOneOptions,
    ObjectID,
    Repository,
    SelectQueryBuilder
} from "typeorm"
import { IPagination, IPaginationList } from "../interfaces"

export abstract class ExtendedRepository<E> extends Repository<E> {
    async findOneOrError(
        conditions: string | number | ObjectID | FindConditions<E>,
        options?: FindOneOptions<E>
    ): Promise<E> {
        try {
            return await super.findOneOrFail(conditions as any, options)
        } catch (e) {
            if (e.name === "EntityNotFound")
                throw new NotFoundException(this.metadata.targetName)
            else throw e
        }
    }

    /** Pagination START */

    async getManyAndPaginate(
        oldQuery: SelectQueryBuilder<E>,
        pagination: IPagination
    ): Promise<IPaginationList<E>> {
        let query = oldQuery.skip(pagination.skip).take(pagination.limit)

        if (pagination.sortField) {
            const sort: "ASC" | "DESC" =
                pagination.sort === "ASC" ? "ASC" : "DESC"
            query = query.orderBy(pagination.sortField, sort)
        }

        const [items, count] = await query.getManyAndCount()
        return { count, items }
    }

    /** Pagination END */
}
