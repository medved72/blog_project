import { createSelector } from '@reduxjs/toolkit'
import { getArticleListViewState } from './getArticleListViewState'

export const getArticleListViewSort = createSelector(
    getArticleListViewState,
    (state) => state.sort
)
