const container: any = {}

export const $setGlobal = (key, value) => {
    container[key] = value
}

export const $getGlobal = key => {
    return container[key]
}
