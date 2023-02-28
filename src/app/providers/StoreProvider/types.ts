import { type setupStore } from './store'
import {
    type AnyAction,
    type CombinedState,
    type Reducer,
    type ReducersMapObject,
    type ThunkMiddleware,
} from '@reduxjs/toolkit'
import { type ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { type LoginState } from 'features/AuthByUsername'
import { type CounterState } from 'entities/Counter'
import { type UserState } from 'entities/User'
import { type ProfileState } from 'entities/Profile'

export interface AppState {
    user: UserState
    counter: CounterState
    loginForm?: LoginState
    profile?: ProfileState
}

export type AppDispatch = ReturnType<typeof setupStore>['dispatch']

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<AppState>
    reduce: (
        state: AppState | undefined,
        action: AnyAction
    ) => CombinedState<AppState>
    add: (key: keyof AppState, reducer: Reducer) => void
    remove: (key: keyof AppState) => void
}

export type StoreWithReducerManager = ToolkitStore<
    AppState,
    AnyAction,
    [ThunkMiddleware<AppState, AnyAction, undefined>]
> & { reducerManager: ReducerManager }
