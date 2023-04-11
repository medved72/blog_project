import { createSelector } from '@reduxjs/toolkit'
import { getUserState } from './getUserState.selector'

export const getUserAuthData = createSelector(
    getUserState,
    (state) => state.authData
)
