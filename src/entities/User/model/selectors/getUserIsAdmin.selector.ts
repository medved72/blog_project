import { createSelector } from '@reduxjs/toolkit'
import { getUserRoles } from './getUserRoles.selector'

export const getUserIsAdmin = createSelector(getUserRoles, (roles) =>
    roles.includes('ADMIN')
)
