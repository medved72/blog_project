import { createSelector } from '@reduxjs/toolkit'
import { getAddArticleCommentFormState } from './getAddArticleCommentFormState'

export const getAddArticleCommentFormText = createSelector(
    getAddArticleCommentFormState,
    (state) => state.text
)
