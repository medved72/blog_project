import { createSelector } from '@reduxjs/toolkit'

import { buildSelector } from '@/shared/lib/store'

import { getUserIsAdmin } from './getUserIsAdmin.selector'
import { getUserIsManager } from './getUserIsManager.selector'

export const [useCanViewAdminPanel, getCanViewAdminPanel] = buildSelector(
    createSelector(getUserIsAdmin, getUserIsManager, (isAdmin, isManager) => {
        return isAdmin || isManager
    })
)
