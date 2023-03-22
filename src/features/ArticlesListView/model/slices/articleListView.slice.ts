import {
    createEntityAdapter,
    createSlice,
    type PayloadAction,
} from '@reduxjs/toolkit'
import { type Article, type ArticleListViewMode } from 'entities/Article'
import { type ArticlesListViewState } from '../types/ArticlesListViewState'
import { fetchArticlesList } from '../services/fetchArticlesList'
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

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
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleListViewMode>) => {
            state.view = action.payload
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload)
        },
        initState: (state) => {
            state.view =
                (localStorage.getItem(
                    ARTICLE_VIEW_LOCALSTORAGE_KEY
                ) as ArticleListViewMode) ??
                getArticleListViewInitialState().view
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
                articlesListAdapter.setAll(state, action.payload)
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
        initState: initArticleListViewModeState,
    },
    getInitialState: getArticleListViewInitialState,
} = articleListViewSlice
