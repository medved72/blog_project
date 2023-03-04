import { type setupStore } from './store'
import {
    type AnyAction,
    type CombinedState,
    type Reducer,
    type ReducersMapObject,
} from '@reduxjs/toolkit'
import { type LoginState } from 'features/AuthByUsername'
import { type UserState } from 'entities/User'
import { type ProfileState } from 'entities/Profile'
import { type AxiosInstance } from 'axios'
import { type NavigateFunction } from 'react-router-dom'

export interface AppState {
    user: UserState
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

export type StoreWithReducerManager = ReturnType<typeof setupStore>

export interface ThunkExtraArg {
    api: AxiosInstance
    navigate?: NavigateFunction
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
}
