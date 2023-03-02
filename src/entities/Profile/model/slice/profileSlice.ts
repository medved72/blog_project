import { createSlice } from '@reduxjs/toolkit'
import { type ProfileState } from '../types/profile'
import { fetchProfileData } from '../services/fetchProfileData'

const initialState: ProfileState = {
    status: 'idle',
    readonly: true,
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined
                state.status = 'loading'
            })
            .addCase(fetchProfileData.fulfilled, (state, { payload }) => {
                state.status = 'fulfilled'
                state.data = payload
            })
            .addCase(fetchProfileData.rejected, (state, { payload }) => {
                state.status = 'error'
                state.error = payload
            }),
})

export const { actions, reducer } = profileSlice
