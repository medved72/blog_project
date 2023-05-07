import { useSelector } from 'react-redux'

type Selector<T, Args extends any[]> = (state: GlbAppState, ...args: Args) => T

type Result<T, Args extends any[]> = [(...args: Args) => T, Selector<T, Args>]

export function buildSelector<T, Args extends any[]>(
    selector: Selector<T, Args>
): Result<T, Args> {
    const useSelectorHook = (...args: Args) => {
        return useSelector((state: GlbAppState) => selector(state, ...args))
    }

    return [useSelectorHook, selector]
}
