export const debounce = <T extends (...args: any[]) => any>(
    fn: T,
    delay: number
): ((...args: Parameters<T>) => void) & { cancel: () => void } => {
    let context: any
    let savedArgs: Parameters<typeof fn> | null = null
    let cancelToken: ReturnType<typeof setTimeout>

    function wrapper(this: any, ...args: Parameters<typeof fn>) {
        clearTimeout(cancelToken)
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        context = this
        savedArgs = args
        cancelToken = setTimeout(() => {
            if (savedArgs) {
                fn.apply(context, savedArgs)
                savedArgs = null
                context = null
            }
        }, delay)
    }

    wrapper.cancel = () => {
        clearTimeout(cancelToken)
    }

    return wrapper
}
