export const throttle = <T extends (...args: any[]) => any>(
    fn: T,
    delay: number
): ((...args: Parameters<T>) => void) & { cancel: () => void } => {
    let isThrottled = false
    let context: any
    let savedArgs: Parameters<typeof fn> | null = null
    let cancelToken: ReturnType<typeof setTimeout>

    function wrapper(this: any, ...args: Parameters<typeof fn>) {
        if (isThrottled) {
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            context = this
            savedArgs = args
            return
        }

        fn.apply(context, args)

        isThrottled = true

        cancelToken = setTimeout(() => {
            isThrottled = false
            if (savedArgs) {
                wrapper.apply(context, savedArgs)
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
