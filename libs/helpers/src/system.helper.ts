export const _getOrDef = <T>(get: T, def: T): T => {
    try {
        return get ? get : def
    } catch (e) {
        return def
    }
}
