import { createSlice } from '@reduxjs/toolkit'
import { type ProfileState } from '../types/profile'

const initialState: ProfileState = {
    status: 'idle',
    readonly: true,
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
})

export const { actions, reducer } = profileSlice
