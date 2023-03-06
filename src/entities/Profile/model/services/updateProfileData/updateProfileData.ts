import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Profile, type ProfileErrors } from '../../types/profile'
import * as selectors from '../../selectors'

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    GlbThunkConfig<ProfileErrors>
>('profile/updateProfileData', async (_, thunkAPI) => {
    try {
        const formData = selectors.form(thunkAPI.getState())
        const response = await thunkAPI.extra.api.put<Profile>(
            '/profile',
            formData
        )
        return response.data
    } catch (e) {
        return thunkAPI.rejectWithValue('ERROR_UNKNOWN_ERROR')
    }
})
