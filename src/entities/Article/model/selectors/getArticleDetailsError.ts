import { createSelector } from '@reduxjs/toolkit'

import { getArticleDetails } from './getArticleDetails'

export const getArticleDetailsError = createSelector(
    getArticleDetails,
    (state) => state?.error
)
