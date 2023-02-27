import { type FC, memo, type PropsWithChildren, useMemo } from 'react'
import { Provider } from 'react-redux'
import { setupStore } from './store'
import { type AppState } from './types'

interface StoreProviderProps {
    initialState?: AppState
}

export const StoreProvider: FC<PropsWithChildren<StoreProviderProps>> = memo(
    (props) => {
        const { children, initialState } = props

        const store = useMemo(() => setupStore(initialState), [initialState])

        return <Provider store={store}>{children}</Provider>
    }
)
StoreProvider.displayName = 'StoreProvider'
