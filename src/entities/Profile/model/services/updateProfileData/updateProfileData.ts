import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Profile, type ProfileErrors } from '../../types/profile'
import * as selectors from '../../selectors'
import { validateProfileData } from '../validateProfileData'

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    GlbThunkConfig<ProfileErrors>
>('profile/updateProfileData', async (_, thunkAPI) => {
    try {
        const formData = selectors.form(thunkAPI.getState())
        if (!formData?.id) {
            return thunkAPI.rejectWithValue(['SERVER_ERROR'])
        }

        const errors = validateProfileData(formData)
        if (errors.length) {
            return thunkAPI.rejectWithValue(errors)
        }

        const response = await thunkAPI.extra.api.put<Profile>(
            `/profile/${formData?.id}`,
            formData
        )
        return response.data
    } catch (e) {
        return thunkAPI.rejectWithValue(['SERVER_ERROR'])
    }
})
