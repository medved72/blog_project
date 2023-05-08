import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage'
import { setFeatureFlags } from '@/shared/lib/featureFlags'
import { type UserDto } from '@/shared/api/types'

import { initAuthData } from '../services/initAuthData'
import { saveJsonSettings } from '../services/saveJsonSettings'
import { type UserState } from '../types/user'

const initialState: UserState = {}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, { payload }: PayloadAction<UserDto>) => {
            state.authData = payload
        },
        logout: (state) => {
            state.authData = undefined
            localStorage.removeItem(USER_LOCALSTORAGE_KEY)
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(saveJsonSettings.fulfilled, (state, { payload }) => {
                if (!state.authData) {
                    return
                }

                state.authData.jsonSettings = payload
            })
            .addCase(initAuthData.fulfilled, (state, { payload }) => {
                localStorage.setItem(USER_LOCALSTORAGE_KEY, payload.id)
                state.authData = payload
                setFeatureFlags(payload.features)
                state.__initialized = true
            })
            .addCase(initAuthData.rejected, (state) => {
                state.__initialized = true
            }),
})

export const { actions, reducer } = userSlice
