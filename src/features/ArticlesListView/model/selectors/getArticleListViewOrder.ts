import { createSelector } from '@reduxjs/toolkit'

import { getArticleListViewState } from './getArticleListViewState'

export const getArticleListViewOrder = createSelector(
    getArticleListViewState,
    (state) => state.order
)
