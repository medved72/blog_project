import { type FC, memo, type PropsWithChildren, useMemo } from 'react'
import { Provider } from 'react-redux'
import { setupStore } from './store'
import { type AppState } from './types'
import { type ReducersMapObject } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'

interface StoreProviderProps {
    initialState?: AppState
    asyncReducers?: ReducersMapObject<AppState>
}

export const StoreProvider: FC<PropsWithChildren<StoreProviderProps>> = memo(
    (props) => {
        const { children, initialState, asyncReducers } = props

        const navigate = useNavigate()

        const store = useMemo(
            () => setupStore(initialState, asyncReducers, navigate),
            [asyncReducers, initialState, navigate]
        )

        return <Provider store={store}>{children}</Provider>
    }
)
StoreProvider.displayName = 'StoreProvider'
