import {
    createEntityAdapter,
    createSlice,
    type PayloadAction,
} from '@reduxjs/toolkit'

import {
    type Article,
    type ArticleListViewMode,
    type ArticleSortFieldValues,
    type ArticleType,
} from '@/entities/Article'

import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from '@/shared/const/localStorage'
import { type SortOrderValues } from '@/shared/types'

import { fetchArticlesList } from '../services/fetchArticlesList'
import { getArticleListViewInitialState } from './getArticleListViewInitialState'
import { isArticleListViewMode } from '../../lib/IsArticleListViewMode'
import { isArticleSortField } from '../../lib/isArticleSortField'
import { isArticleType } from '../../lib/isArticleType'
import { isSortOrder } from '../../lib/isSortOrder'
import { type ArticlesListViewState } from '../types/ArticlesListViewState'

const articlesListAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
})

export const getArticlesList = articlesListAdapter.getSelectors<GlbAppState>(
    (state) => state.articlesListView ?? articlesListAdapter.getInitialState()
)

const articleListViewSlice = createSlice({
    name: 'articleListView',
    initialState: articlesListAdapter.getInitialState<ArticlesListViewState>(
        getArticleListViewInitialState()
    ),
    reducers: {
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload
        },
        setOrder: (state, action: PayloadAction<SortOrderValues>) => {
            state.order = action.payload
        },
        setSort: (state, action: PayloadAction<ArticleSortFieldValues>) => {
            state.sort = action.payload
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        },
        setView: (state, action: PayloadAction<ArticleListViewMode>) => {
            state.view = action.payload
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload)
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        initialize: (state, { payload }: PayloadAction<URLSearchParams>) => {
            const sortOrder = payload.get('sortOrder')
            const sortBy = payload.get('sortBy')
            const search = payload.get('search')
            const type = payload.get('type')

            if (isSortOrder(sortOrder)) {
                state.order = sortOrder
            }

            if (isArticleSortField(sortBy)) {
                state.sort = sortBy
            }

            if (isArticleType(type)) {
                state.type = type
            }

            if (search) {
                state.search = search
            }

            const localStorageViewMode = localStorage.getItem(
                ARTICLE_VIEW_LOCALSTORAGE_KEY
            )

            if (isArticleListViewMode(localStorageViewMode)) {
                state.view = localStorageViewMode
            }

            state.limit = state.view === 'tile' ? 20 : 5

            state._initialized = true
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(fetchArticlesList.pending, (state, action) => {
                state.loading = true
                state.error = undefined
                if (action.meta.arg?.replace) {
                    articlesListAdapter.removeAll(state)
                }
            })
            .addCase(fetchArticlesList.fulfilled, (state, action) => {
                state.loading = false
                state.hasMore = action.payload.length >= state.limit
                const updateArticlesList = action.meta.arg?.replace
                    ? articlesListAdapter.setAll
                    : articlesListAdapter.addMany
                updateArticlesList(state, action.payload)
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                if (action.payload === 'CANCELED_ERROR') return
                state.loading = false
                state.error = action.payload
                articlesListAdapter.setAll(state, [])
            }),
})

export const {
    reducer: articlesListViewReducer,
    actions: articlesListViewActions,
} = articleListViewSlice
