type Mods = Record<string, string | boolean | undefined>

type AdditionalItem = false | string | undefined

export const classNames = (
    root?: string,
    mods: Mods = {},
    additional: AdditionalItem[] = []
): string => {
    const classes: string[] = root ? [root] : []

    Object.entries(mods).forEach(([modClass, condition]) => {
        if (condition) {
            classes.push(modClass)
        }
    })

    additional.forEach((className) => {
        if (className) {
            classes.push(className)
        }
    })

    return classes.join(' ')
}
