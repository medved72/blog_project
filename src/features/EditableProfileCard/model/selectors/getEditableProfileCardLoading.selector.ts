import { createSelector } from '@reduxjs/toolkit'
import { getEditableProfileCardState } from './getEditableProfileCardState.selector'

export const getEditableProfileCardLoading = createSelector(
    getEditableProfileCardState,
    (state) => state.status === 'loading'
)
