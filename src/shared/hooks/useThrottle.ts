import { useEffect, useMemo } from 'react'

import { throttle } from '../lib/throttle'
import { useRefFn } from './useRefFn'

export const useThrottle = <Fn extends (...args: any[]) => any>(
    callback: Fn,
    delay: number
) => {
    const memoizedFn = useRefFn(callback)

    const throttledFn = useMemo(() => {
        return throttle(memoizedFn, delay)
    }, [memoizedFn, delay])

    useEffect(
        () => () => {
            throttledFn.cancel()
        },
        [throttledFn]
    )

    return throttledFn
}
