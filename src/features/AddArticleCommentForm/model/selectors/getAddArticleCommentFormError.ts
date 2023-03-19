import { createSelector } from '@reduxjs/toolkit'
import { getAddArticleCommentFormState } from './getAddArticleCommentFormState'

export const getAddArticleCommentFormError = createSelector(
    getAddArticleCommentFormState,
    (state) => state.error
)
