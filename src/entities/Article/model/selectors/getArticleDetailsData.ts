import { createSelector } from '@reduxjs/toolkit'
import { getArticleDetails } from './getArticleDetails'

export const getArticleDetailsData = createSelector(
    getArticleDetails,
    (state) => state?.data
)
