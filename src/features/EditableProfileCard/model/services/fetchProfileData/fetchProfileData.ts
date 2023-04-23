import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Profile, type ProfileErrors } from '@/entities/Profile'

export const fetchProfileData = createAsyncThunk<
    Profile,
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
