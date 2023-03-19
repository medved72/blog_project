import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Profile, type ProfileErrors } from '../../types/profile'

export const fetchProfileData = createAsyncThunk<
    Profile,
    string,
    GlbThunkConfig<ProfileErrors>
>('profile/fetchProfileData', async (id, thunkAPI) => {
    try {
        const response = await thunkAPI.extra.api.get(`/profile/${id}`)
        return response.data
    } catch (e) {
        return thunkAPI.rejectWithValue(['SERVER_ERROR'])
    }
})
