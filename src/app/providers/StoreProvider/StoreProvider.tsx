import { type FC, memo, type PropsWithChildren, useMemo } from 'react'
import { Provider } from 'react-redux'
import { setupStore } from './setupStore'
import { type AppState } from './types'
import { type ReducersMapObject } from '@reduxjs/toolkit'

interface StoreProviderProps {
    initialState?: AppState
    asyncReducers?: ReducersMapObject<AppState>
}

export const StoreProvider: FC<PropsWithChildren<StoreProviderProps>> = memo(
    (props) => {
        const { children, initialState, asyncReducers } = props

        const store = useMemo(() => {
            return setupStore(initialState, asyncReducers)
        }, [asyncReducers, initialState])

        return <Provider store={store}>{children}</Provider>
    }
)
StoreProvider.displayName = 'StoreProvider'
