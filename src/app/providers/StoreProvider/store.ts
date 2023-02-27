import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { createReducerManager } from './reducerManager'
import { type AppState, type StoreWithReducerManager } from './types'

import { reducer as user } from 'entities/User'
import { reducer as counter } from 'entities/Counter'

export const setupStore = (
    initialState?: AppState,
    asyncReducers?: ReducersMapObject<AppState>
) => {
    const reducerMap: ReducersMapObject<AppState> = {
        ...asyncReducers,
        user,
        counter,
    }

    const reducerManager = createReducerManager(reducerMap)

    const store: StoreWithReducerManager = {
        ...configureStore<AppState>({
            reducer: reducerManager.reduce,
            devTools: _IS_DEV_,
            preloadedState: initialState,
        }),
        reducerManager,
    }

    return store
}
