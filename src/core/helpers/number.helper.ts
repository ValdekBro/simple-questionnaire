export const getSafeBetweeen = (val = 0, max: number, min = 0) => {
    if (val > max) return max
    if (val < min) return min
    return val
}
