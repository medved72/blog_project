import { useCallback, useRef } from 'react'

export const useThrottle = <Arg>(
    callback: (...args: Arg[]) => void,
    delay: number
) => {
    const throttleRef = useRef(false)

    return useCallback(
        (...args: Arg[]) => {
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
