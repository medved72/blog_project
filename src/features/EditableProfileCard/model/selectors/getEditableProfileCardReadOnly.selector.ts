import { createSelector } from '@reduxjs/toolkit'

import { getEditableProfileCardState } from './getEditableProfileCardState.selector'

export const getEditableProfileCardReadOnly = createSelector(
    getEditableProfileCardState,
    (state) => state.readonly
)
