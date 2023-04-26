import { createSlice } from '@reduxjs/toolkit'

import { fetchArticleById } from '../services/fetchArticleById'
import { type ArticleDetailsState } from '../types/articleDetailsState'

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
                state.isLoading = true
                state.error = undefined
            })
            .addCase(fetchArticleById.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.data = payload
            })
            .addCase(fetchArticleById.rejected, (state, { payload }) => {
                state.isLoading = false
                state.error = payload
            }),
})

export const { actions, reducer } = articleDetailsSlice
