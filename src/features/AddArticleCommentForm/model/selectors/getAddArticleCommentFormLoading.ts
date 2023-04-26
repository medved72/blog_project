import { createSelector } from '@reduxjs/toolkit'

import { getAddArticleCommentFormState } from './getAddArticleCommentFormState'

export const getAddArticleCommentFormLoading = createSelector(
    getAddArticleCommentFormState,
    (state) => state.loading
)
