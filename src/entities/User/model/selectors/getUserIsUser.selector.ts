import { createSelector } from '@reduxjs/toolkit'
import { getUserRoles } from './getUserRoles.selector'

export const getUserIsUser = createSelector(getUserRoles, (roles) =>
    roles.includes('USER')
)
