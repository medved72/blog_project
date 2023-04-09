import { createSelector } from '@reduxjs/toolkit'
import { getEditableProfileCardState } from './getEditableProfileCardState.selector'

export const getProfileValidationErrors = createSelector(
    getEditableProfileCardState,
    (state) => state.validateError
)
