import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type Profile, type ProfileState } from '../types/profile'
import { fetchProfileData } from '../services/fetchProfileData'
import { updateProfileData } from '../services/updateProfileData'

const initialState: ProfileState = {
    status: 'idle',
    readonly: true,
    validateError: [],
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadOnly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload
        },
        updateProfile: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            }
        },
        cancelEdit: (state) => {
            state.readonly = true
            state.form = state.data
            state.validateError = []
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined
                state.status = 'loading'
            })
            .addCase(fetchProfileData.fulfilled, (state, { payload }) => {
                state.status = 'fulfilled'
                state.data = payload
                state.form = payload
            })
            .addCase(fetchProfileData.rejected, (state, { payload }) => {
                state.status = 'error'
                state.error = payload
            })
            .addCase(updateProfileData.pending, (state) => {
                state.validateError = []
                state.status = 'loading'
            })
            .addCase(updateProfileData.fulfilled, (state, { payload }) => {
                state.status = 'fulfilled'
                state.data = payload
                state.form = payload
                state.readonly = true
                state.validateError = []
            })
            .addCase(updateProfileData.rejected, (state, { payload }) => {
                state.status = 'error'
                state.validateError = payload ?? []
            }),
})

export const { actions, reducer } = profileSlice
