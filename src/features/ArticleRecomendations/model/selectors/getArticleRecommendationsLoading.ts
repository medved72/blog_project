import { createSelector } from '@reduxjs/toolkit'
import { getArticleRecommendationsState } from './getArticleRecommendationsState'

export const getArticleRecommendationsLoading = createSelector(
    getArticleRecommendationsState,
    (state) => state.isLoading
)
