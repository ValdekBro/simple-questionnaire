export const clearObj = (obj: any, allowedKeys?: string[]) => {
    const newObj: any = {}
    let hasOne = false

    Object.keys(obj).map((key: string) => {
        if (allowedKeys && !allowedKeys.includes(key)) return
        if (obj[key]) {
            newObj[key] = obj[key]
            hasOne = true
        }
    })

    return hasOne ? newObj : null
}

export const extractFromObj = <T, E extends keyof T>(obj: T, keys: E[]): Pick<T, E> => {
    const result: any = {}
    keys.map(it => {
        result[it] = obj[it]
    })
    return result as Pick<T, E>
}
