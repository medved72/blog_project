import { createSelector } from '@reduxjs/toolkit'

import { getScrollRestore } from './getScrollRestore'

export const getScrollRestoreByPath = (path: string) =>
    createSelector(getScrollRestore, (scroll) => scroll[path] || 0)
