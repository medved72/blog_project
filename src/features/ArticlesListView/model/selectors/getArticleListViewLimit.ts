import { createSelector } from '@reduxjs/toolkit'
import { getArticleListViewState } from './getArticleListViewState'

export const getArticleListViewLimit = createSelector(
    getArticleListViewState,
    (state) => state.limit
)
