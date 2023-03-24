import { createSelector } from '@reduxjs/toolkit'
import { getArticleListViewState } from './getArticleListViewState'

export const getArticleListViewPage = createSelector(
    getArticleListViewState,
    (state) => state.page
)
