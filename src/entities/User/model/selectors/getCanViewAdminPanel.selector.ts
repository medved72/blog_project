import { createSelector } from '@reduxjs/toolkit'
import { getUserIsAdmin } from './getUserIsAdmin.selector'
import { getUserIsManager } from './getUserIsManager.selector'

export const getCanViewAdminPanel = createSelector(
    getUserIsAdmin,
    getUserIsManager,
    (isAdmin, isManager) => {
        return isAdmin || isManager
    }
)
