import { createAsyncThunk } from '@reduxjs/toolkit'

import { type ProfileErrors } from '@/entities/Profile'

import { type ProfileDto } from '@/shared/api/types'

export const fetchProfileData = createAsyncThunk<
    ProfileDto,
    string,
    GlbThunkConfig<ProfileErrors>
>('editableProfileCard/fetchProfileData', async (id, thunkAPI) => {
    try {
        const response = await thunkAPI.extra.api.get(`/profile/${id}`)
        return response.data
    } catch (e) {
        return thunkAPI.rejectWithValue(['SERVER_ERROR'])
    }
})
