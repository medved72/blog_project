import { createSelector } from '@reduxjs/toolkit'
import { getArticleRecommendationsState } from './getArticleRecommendationsState'

export const getArticleRecommendationsError = createSelector(
    getArticleRecommendationsState,
    (state) => state.error
)
