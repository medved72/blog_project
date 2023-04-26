import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'

import { type CommentDto } from '@/entities/Comment'

import { fetchCommentsListByArticleId } from '../services/fetchCommentsListByArticleId'
import { type ArticleCommentListState } from '../types/ArticleCommentListState'

const commentsAdapter = createEntityAdapter<CommentDto>({
    selectId: (comment) => comment.id,
})

export const getArticleCommentsListAdapterSelectors =
    commentsAdapter.getSelectors<GlbAppState>(
        (state) => state.articleCommentList ?? commentsAdapter.getInitialState()
    )

const articleCommentsListSlice = createSlice({
    name: 'articleCommentsList',
    initialState: commentsAdapter.getInitialState<ArticleCommentListState>({
        ids: [],
        entities: {},
        isLoading: false,
        error: undefined,
    }),
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(fetchCommentsListByArticleId.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(
                fetchCommentsListByArticleId.fulfilled,
                (state, { payload }) => {
                    state = commentsAdapter.setAll(state, payload)
                    state.isLoading = false
                }
            )
            .addCase(
                fetchCommentsListByArticleId.rejected,
                (state, { payload }) => {
                    state.error = payload
                    state.isLoading = false
                }
            ),
})

export const {
    reducer: articleCommentsListReducer,
    getInitialState: getArticleCommentsListInitialState,
} = articleCommentsListSlice
