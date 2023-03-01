import { type Reducer } from '@reduxjs/toolkit'
import { type FC, memo, type PropsWithChildren, useEffect } from 'react'
import { useAppStore } from 'shared/hooks/useAppStore'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'

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

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as keyof GlbAppState, reducer)
            dispatch({ type: `@INIT ${name} reducer` })
        })

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as keyof GlbAppState)
                    dispatch({ type: `@DESTROY ${name} reducer` })
                })
            }
        }
    }, [dispatch, reducers, removeAfterUnmount, store.reducerManager])

    return <>{children}</>
})
DynamicModuleLoader.displayName = 'DynamicModuleLoader'

export const withDynamicModuleLoader = <T extends object>(
    Component: FC<T>,
    options: DynamicModuleLoaderProps
): FC<T> => {
    return memo<T>(function WithDynamicModuleLoader(props) {
        return (
            <DynamicModuleLoader {...options}>
                <Component {...props} />
            </DynamicModuleLoader>
        )
    })
}
