export const getSafeArray = <T>(arr: T[]): T[] => {
    return Array.isArray(arr) ? arr : []
}

export const isNotEmptyArray = (arr: unknown[]): boolean => {
    return Boolean(Array.isArray(arr) && arr.length)
}
