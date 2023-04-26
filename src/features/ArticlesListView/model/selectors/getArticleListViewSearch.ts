import { createSelector } from '@reduxjs/toolkit'

import { getArticleListViewState } from './getArticleListViewState'

export const getArticleListViewSearch = createSelector(
    getArticleListViewState,
    (state) => state.search
)
