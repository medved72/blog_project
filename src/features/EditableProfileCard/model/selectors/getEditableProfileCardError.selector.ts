import { createSelector } from '@reduxjs/toolkit'
import { getEditableProfileCardState } from './getEditableProfileCardState.selector'

export const getEditableProfileCardError = createSelector(
    getEditableProfileCardState,
    (state) => state.error
)
