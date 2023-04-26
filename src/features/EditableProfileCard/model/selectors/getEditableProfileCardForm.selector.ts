import { createSelector } from '@reduxjs/toolkit'

import { getEditableProfileCardState } from './getEditableProfileCardState.selector'

export const getEditableProfileCardForm = createSelector(
    getEditableProfileCardState,
    (state) => state.form
)
