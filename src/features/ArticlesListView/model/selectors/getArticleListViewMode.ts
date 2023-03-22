import { createSelector } from '@reduxjs/toolkit'
import { getArticleListViewState } from './getArticleListViewState'

export const getArticleListViewMode = createSelector(
    getArticleListViewState,
    (state) => state.view
)
