import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './reducer'

export const setupStore = (initialState?: ReturnType<typeof rootReducer>) =>
    configureStore({
        reducer: rootReducer,
        devTools: _IS_DEV_,
        preloadedState: initialState,
    })
