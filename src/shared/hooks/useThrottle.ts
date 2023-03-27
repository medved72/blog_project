import { useCallback, useRef } from 'react'

export const useThrottle = <U>(
    callback: (...args: U[]) => void,
    delay: number
) => {
    const throttleRef = useRef(false)

    return useCallback(
        (...args: U[]) => {
            if (!throttleRef.current) {
                callback(...args)
                throttleRef.current = true

                setTimeout(() => {
                    throttleRef.current = false
                }, delay)
            }
        },
        [callback, delay]
    )
}
