import { createSelector } from '@reduxjs/toolkit'

import { getUserRoles } from './getUserRoles.selector'

export const getUserIsManager = createSelector(getUserRoles, (roles) =>
    roles.includes('MANAGER')
)
