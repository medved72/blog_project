import { createSelector } from '@reduxjs/toolkit'

import { buildSelector } from '@/shared/lib/store'

import { getUserState } from './getUserState.selector'

const selector = createSelector(
    getUserState,
    (state) => state.authData?.jsonSettings ?? {}
)

export const [useUserJsonSettings, getUserJsonSettings] =
    buildSelector(selector)
