import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { type Article } from 'entities/Article'
import { type ArticleRecommendationsState } from '../types/ArticleRecommendationsState'
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations'

export const articleRecommendationsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
})

const articleRecommendationsSlice = createSlice({
    name: 'articleRecommendations',
    initialState:
        articleRecommendationsAdapter.getInitialState<ArticleRecommendationsState>(
            {
                ids: [],
                entities: {},
                isLoading: false,
                error: undefined,
            }
        ),
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
                state.isLoading = false
                articleRecommendationsAdapter.setAll(state, action.payload)
            })
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
                articleRecommendationsAdapter.removeAll(state)
            }),
})

export const {
    reducer: articleRecommendationsReducer,
    actions: articleRecommendationsActions,
    getInitialState: getArticleRecommendationsInitialState,
} = articleRecommendationsSlice
