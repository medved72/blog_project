import { createSelector } from '@reduxjs/toolkit'
import { getArticleListViewState } from './getArticleListViewState'

export const getArticleListViewInitialized = createSelector(
    getArticleListViewState,
    (state) => state._initialized
)
