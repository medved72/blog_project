import { createSelector } from '@reduxjs/toolkit'

import { getArticleListViewState } from './getArticleListViewState'

export const getArticleListViewError = createSelector(
    getArticleListViewState,
    (state) => state.error
)
