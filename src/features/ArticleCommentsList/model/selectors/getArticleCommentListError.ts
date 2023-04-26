import { createSelector } from '@reduxjs/toolkit'

import { getArticleCommentList } from './getArticleCommentList'
import { getArticleCommentsListInitialState } from '../slices/articleCommentsList.slice'

export const getArticleCommentListError = createSelector(
    getArticleCommentList,
    (state) => state?.error ?? getArticleCommentsListInitialState().error
)
