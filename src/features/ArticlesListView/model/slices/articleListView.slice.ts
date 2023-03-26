import {
    createEntityAdapter,
    createSlice,
    type PayloadAction,
} from '@reduxjs/toolkit'
import { type Article, type ArticleListViewMode } from 'entities/Article'
import { type ArticlesListViewState } from '../types/ArticlesListViewState'
import { fetchArticlesList } from '../services/fetchArticlesList'
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage'
import { isArticleListViewMode } from '../../lib/IsArticleListViewMode'

const articlesListAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
})

export const getArticlesList = articlesListAdapter.getSelectors<GlbAppState>(
    (state) => state.articlesListView ?? articlesListAdapter.getInitialState()
)

const articleListViewSlice = createSlice({
    name: 'articleListView',
    initialState: articlesListAdapter.getInitialState<ArticlesListViewState>({
        ids: [],
        entities: {},
        view: 'tile',
        page: 0,
        limit: 10,
        hasMore: true,
        _initialized: false,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleListViewMode>) => {
            state.view = action.payload
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload)
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        initialize: (state) => {
            const localStorageViewMode = localStorage.getItem(
                ARTICLE_VIEW_LOCALSTORAGE_KEY
            )

            if (isArticleListViewMode(localStorageViewMode)) {
                state.view = localStorageViewMode
            }

            state._initialized = true
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(fetchArticlesList.pending, (state) => {
                state.loading = true
                state.error = undefined
            })
            .addCase(fetchArticlesList.fulfilled, (state, action) => {
                state.loading = false
                articlesListAdapter.addMany(state, action.payload)
                state.hasMore = action.payload.length > 0
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
                articlesListAdapter.setAll(state, [])
            }),
})

export const {
    reducer: articlesListViewReducer,
    actions: {
        setView: setArticleListViewMode,
        setPage: setArticleListViewPage,
        initialize: initializeArticleListView,
    },
    getInitialState: getArticleListViewInitialState,
} = articleListViewSlice
