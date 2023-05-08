import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage'
import { setFeatureFlags } from '@/shared/lib/featureFlags'
import { type UserDto } from '@/shared/api/types'

import { isUserDto } from '../../lib/isUserDto'
import { type UserState } from '../types/user'

const initialState: UserState = {}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, { payload }: PayloadAction<UserDto>) => {
            state.authData = payload
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)
            if (user) {
                const userDto = JSON.parse(user)

                if (!isUserDto(userDto)) return

                state.authData = userDto
                setFeatureFlags(userDto.features)
            }
            state.__initialized = true
        },
        logout: (state) => {
            localStorage.removeItem(USER_LOCALSTORAGE_KEY)
            state.authData = undefined
        },
    },
})

export const { actions, reducer } = userSlice
