import { createSelector } from '@reduxjs/toolkit'

import { getEditableProfileCardState } from './getEditableProfileCardState.selector'

export const getEditableProfileCardProfile = createSelector(
    getEditableProfileCardState,
    (state) => state.data
)
