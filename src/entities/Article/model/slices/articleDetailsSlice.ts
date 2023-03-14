import { createSlice } from '@reduxjs/toolkit'
import { type ArticleDetailsState } from '../types/articleDetailsState'
import { fetchArticleById } from '../services/fetchArticleById'

const initialState: ArticleDetailsState = {
    isLoading: false,
}

export const articleDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(fetchArticleById.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchArticleById.fulfilled, (state, { payload }) => {
                state.data = payload
                state.isLoading = false
            })
            .addCase(fetchArticleById.rejected, (state, { payload }) => {
                state.error = payload
                state.isLoading = false
            }),
})

export const { actions, reducer } = articleDetailsSlice
