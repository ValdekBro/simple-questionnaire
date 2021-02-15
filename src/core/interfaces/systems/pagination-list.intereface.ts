export interface IPaginationList<T> {
    items: T[]
    count: number
}

export type IPaginationListAsync<T> = Promise<IPaginationList<T>>
