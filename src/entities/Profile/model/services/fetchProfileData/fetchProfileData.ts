import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Profile, type ProfileErrors } from '../../types/profile'

export const fetchProfileData = createAsyncThunk<
    Profile,
    void,
    GlbThunkConfig<ProfileErrors>
>('profile/fetchProfileData', async (_, thunkAPI) => {
    try {
        const response = await thunkAPI.extra.api.get('/profile')
        return response.data
    } catch (e) {
        return thunkAPI.rejectWithValue('ERROR_UNKNOWN_ERROR')
    }
})
