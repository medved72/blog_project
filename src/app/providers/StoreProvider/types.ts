import {
    type AnyAction,
    type CombinedState,
    type Reducer,
    type ReducersMapObject,
} from '@reduxjs/toolkit'
import { type AxiosInstance } from 'axios'
import { type LoginState } from '@/features/AuthByUsername'
import { type ArticleCommentListState } from '@/features/ArticleCommentsList'
import { type AddArticleCommentFormState } from '@/features/AddArticleCommentForm'
import { type ArticlesListViewState } from '@/features/ArticlesListView'
import { type ScrollRestoreState } from '@/features/ScrollRestore'
import { type EditableProfileCardState } from '@/features/EditableProfileCard'
import { type UserState } from '@/entities/User'
import { type ArticleDetailsState } from '@/entities/Article'
import { type rtkApi } from '@/shared/api/rtkApi'
import { type setupStore } from './setupStore'

export interface AppState {
    user: UserState
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
    scrollRestore: ScrollRestoreState

    // async state
    loginForm?: LoginState
    editableProfileCard?: EditableProfileCardState
    articleDetails?: ArticleDetailsState
    articleCommentList?: ArticleCommentListState
    addArticleCommentForm?: AddArticleCommentFormState
    articlesListView?: ArticlesListViewState
}

export type AppDispatch = ReturnType<typeof setupStore>['dispatch']

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<AppState>
    reduce: (
        state: AppState | undefined,
        action: AnyAction
    ) => CombinedState<AppState>
    add: (key: keyof AppState, reducer: Reducer, dispatch: AppDispatch) => void
    remove: (key: keyof AppState, dispatch: AppDispatch) => void
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
