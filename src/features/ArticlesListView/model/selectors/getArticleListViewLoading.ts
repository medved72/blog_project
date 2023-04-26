import { createSelector } from '@reduxjs/toolkit'

import { getArticleListViewState } from './getArticleListViewState'

export const getArticleListViewLoading = createSelector(
    getArticleListViewState,
    (state) => state.loading
)
