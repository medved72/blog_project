import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { createReducerManager } from './reducerManager'
import { type AppState, type ThunkExtraArg } from './types'

import { reducer as user } from 'entities/User'
import { reducer as counter } from 'entities/Counter'
import { $api } from 'shared/api/api'
import { type NavigateFunction } from 'react-router-dom'

export const setupStore = (
    initialState?: AppState,
    asyncReducers?: ReducersMapObject<AppState>,
    navigate?: NavigateFunction
) => {
    const reducerMap: ReducersMapObject<AppState> = {
        ...asyncReducers,
        user,
        counter,
    }

    const reducerManager = createReducerManager(reducerMap)

    const extraArg: ThunkExtraArg = {
        api: $api,
        navigate,
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
