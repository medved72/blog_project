import { createSelector } from '@reduxjs/toolkit'
import { getArticleCommentList } from './getArticleCommentList'
import { getArticleCommentsListInitialState } from '../slices/articleCommentsList.slice'

export const getArticleCommentListLoading = createSelector(
    getArticleCommentList,
    (state) =>
        state?.isLoading ?? getArticleCommentsListInitialState().isLoading
)
