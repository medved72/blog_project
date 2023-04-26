import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { loginByUsername } from './services/loginByUsername'
import { type LoginState } from './types'

const initialState: LoginState = {
    username: '',
    password: '',
    isLoading: false,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, { payload }: PayloadAction<string>) => {
            state.username = payload
        },
        setPassword: (state, { payload }: PayloadAction<string>) => {
            state.password = payload
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(loginByUsername.fulfilled, (state) => {
                state.isLoading = false
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            }),
})

export const { actions, reducer } = loginSlice
