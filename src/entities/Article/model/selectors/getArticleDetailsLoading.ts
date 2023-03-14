import { createSelector } from '@reduxjs/toolkit'
import { getArticleDetails } from './getArticleDetails'

export const getArticleDetailsLoading = createSelector(
    getArticleDetails,
    (state) => state?.isLoading
)
