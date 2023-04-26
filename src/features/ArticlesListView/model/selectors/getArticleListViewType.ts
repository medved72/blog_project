import { createSelector } from '@reduxjs/toolkit'

import { getArticleListViewState } from './getArticleListViewState'

export const getArticleListViewType = createSelector(
    getArticleListViewState,
    (state) => state.type
)
