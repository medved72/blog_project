import { combineReducers, type ReducersMapObject } from '@reduxjs/toolkit'
import { type AppState, type ReducerManager } from './types'

export function createReducerManager(
    staticReducer: ReducersMapObject<AppState>
): ReducerManager {
    const reducers = {
        ...staticReducer,
    }
    let combinedReducer = combineReducers(reducers)
    let keysToRemove: Array<keyof AppState> = []

    return {
        getReducerMap: () => reducers,
        reduce: (state, action) => {
            if (!state) return combinedReducer(state, action)
            if (keysToRemove.length > 0) {
                state = Object.assign({}, { ...state })
                for (const key of keysToRemove) {
                    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
                    delete state[key]
                }
                keysToRemove = []
            }
            return combinedReducer(state, action)
        },

        add: (key, reducer, dispatch) => {
            if (!key || reducers[key]) {
                return
            }
            reducers[key] = reducer
            combinedReducer = combineReducers(reducers)
            dispatch({ type: `@INIT ${key} reducer` })
        },

        remove: (key, dispatch) => {
            if (!key || !reducers[key]) {
                return
            }
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete reducers[key]
            keysToRemove.push(key)
            combinedReducer = combineReducers(reducers)
            dispatch({ type: `@DESTROY ${key} reducer` })
        },
    }
}
