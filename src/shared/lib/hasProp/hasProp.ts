export function hasProp<X, Y extends PropertyKey>(
    obj: X,
    prop: Y
): obj is X & Record<Y, unknown> {
    if (typeof obj !== 'object' || obj === null || obj === undefined) {
        return false
    }

    return prop in obj
}
