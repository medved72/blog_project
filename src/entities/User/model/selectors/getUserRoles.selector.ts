import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from './getUserAuthData.selector'

export const getUserRoles = createSelector(
    getUserAuthData,
    (state) => state?.roles ?? []
)
