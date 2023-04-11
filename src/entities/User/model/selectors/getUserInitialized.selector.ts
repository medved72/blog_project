import { createSelector } from '@reduxjs/toolkit'
import { getUserState } from './getUserState.selector'

export const getUserInitialized = createSelector(
    getUserState,
    (state) => state.__initialized
)
