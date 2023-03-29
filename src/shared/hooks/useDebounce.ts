import { useCallback, useRef } from 'react'

export const useDebounce = <U>(
    callback: (...args: U[]) => void,
    delay: number
) => {
    const timer = useRef<ReturnType<typeof setTimeout>>()

    return useCallback(
        (...args: U[]) => {
            if (timer.current) {
                clearTimeout(timer.current)
            }
            timer.current = setTimeout(() => {
                callback(...args)
            }, delay)
        },
        [callback, delay]
    )
}
