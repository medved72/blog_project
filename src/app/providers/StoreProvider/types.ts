import { type setupStore } from './setupStore'
import {
    type AnyAction,
    type CombinedState,
    type Reducer,
    type ReducersMapObject,
} from '@reduxjs/toolkit'
import { type LoginState } from 'features/AuthByUsername'
import { type UserState } from 'entities/User'
import { type ProfileState } from 'entities/Profile'
import { type ArticleDetailsState } from 'entities/Article'
import { type AxiosInstance } from 'axios'
import { type ArticleCommentListState } from 'features/ArticleCommentsList'
import { type AddArticleCommentFormState } from 'features/AddArticleCommentForm'
import { type ArticlesListViewState } from 'features/ArticlesListView'
import { type ScrollRestoreState } from 'features/ScrollRestore'

export interface AppState {
    user: UserState
    loginForm?: LoginState
    profile?: ProfileState
    articleDetails?: ArticleDetailsState
    articleCommentList?: ArticleCommentListState
    addArticleCommentForm?: AddArticleCommentFormState
    articlesListView?: ArticlesListViewState
    scrollRestore: ScrollRestoreState
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
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
    state: AppState
    dispatch: AppDispatch
}
