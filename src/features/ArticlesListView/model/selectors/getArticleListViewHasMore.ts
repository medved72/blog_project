import { createSelector } from '@reduxjs/toolkit'
import { getArticleListViewState } from './getArticleListViewState'

export const getArticleListViewHasMore = createSelector(
    getArticleListViewState,
    (state) => state.hasMore
)
