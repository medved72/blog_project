import { useLayoutEffect, useRef } from 'react'

export const useWasTrue = (value: boolean) => {
    const wasMountedRef = useRef(false)

    useLayoutEffect(() => {
        if (value) {
            wasMountedRef.current = true
        }
    }, [value])

    return wasMountedRef.current
}
