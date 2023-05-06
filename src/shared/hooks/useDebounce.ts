import { useEffect, useMemo } from 'react'

import { debounce } from '../lib/debounce'
import { useRefFn } from './useRefFn'

export const useDebounce = <Fn extends (...args: any[]) => any>(
    callback: Fn,
    delay: number
) => {
    const memoizedFn = useRefFn(callback)

    const debouncedFn = useMemo(() => {
        return debounce(memoizedFn, delay)
    }, [memoizedFn, delay])

    useEffect(
        () => () => {
            debouncedFn.cancel()
        },
        [debouncedFn]
    )

    return debouncedFn
}
