import { createSelector } from '@reduxjs/toolkit'
import { getEditableProfileCardState } from './getEditableProfileCardState.selector'

export const getEditableProfileCardFirstName = createSelector(
    getEditableProfileCardState,
    (state) => state.data?.first
)
