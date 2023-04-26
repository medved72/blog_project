import { createSelector } from '@reduxjs/toolkit'

import { getScrollRestoreState } from './getScrollRestoreState'

export const getScrollRestore = createSelector(
    getScrollRestoreState,
    (state) => state.scroll
)
