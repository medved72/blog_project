import {
    type FC,
    memo,
    type PropsWithChildren,
    useEffect,
    useLayoutEffect,
} from 'react'
import { type Reducer } from '@reduxjs/toolkit'
import { useAppStore } from '../../hooks/useAppStore'
import { useAppDispatch } from '../../hooks/useAppDispatch'

type ReducersList = {
    [name in keyof GlbAppState]?: Reducer<NonNullable<GlbAppState[name]>>
}

interface DynamicModuleLoaderProps {
    reducers: ReducersList
    removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<
    PropsWithChildren<DynamicModuleLoaderProps>
> = memo(({ children, reducers, removeAfterUnmount = true }) => {
    const store = useAppStore()
    const dispatch = useAppDispatch()

    useLayoutEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(
                name as keyof GlbAppState,
                reducer,
                dispatch
            )
        })
    }, [dispatch, reducers, store])

    useEffect(() => {
        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(
                        name as keyof GlbAppState,
                        dispatch
                    )
                })
            }
        }
    }, [dispatch, reducers, removeAfterUnmount, store])

    return <>{children}</>
})
DynamicModuleLoader.displayName = 'DynamicModuleLoader'

export const withDynamicModuleLoader = <T extends object>(
    Component: FC<T>,
    options: DynamicModuleLoaderProps
): FC<T> => {
    return memo(function WithDynamicModuleLoader(props) {
        return (
            <DynamicModuleLoader {...options}>
                <Component {...props} />
            </DynamicModuleLoader>
        )
    })
}
