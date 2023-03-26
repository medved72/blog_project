import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { createReducerManager } from './createReducerManager'
import { type AppState, type ThunkExtraArg } from './types'

import { reducer as user } from 'entities/User'
import { $api } from 'shared/api/api'

export const setupStore = (
    initialState?: AppState,
    asyncReducers?: ReducersMapObject<AppState>
) => {
    const reducerMap: ReducersMapObject<AppState> = {
        ...asyncReducers,
        user,
    }

    const reducerManager = createReducerManager(reducerMap)

    const extraArg: ThunkExtraArg = {
        api: $api,
    }

    return {
        ...configureStore({
            reducer: reducerManager.reduce,
            devTools: _IS_DEV_,
            preloadedState: initialState,
            middleware: (getDefaultMiddleware) =>
                getDefaultMiddleware({
                    thunk: {
                        extraArgument: extraArg,
                    },
                }),
        }),
        reducerManager,
    }
}
