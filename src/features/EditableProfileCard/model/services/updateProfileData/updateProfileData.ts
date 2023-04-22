import { createAsyncThunk } from '@reduxjs/toolkit'
import { validateProfileData } from '../validateProfileData'
import { type ProfileErrors } from '../../types/EditableProfileCardState'
import { type Profile } from '@/entities/Profile'
import { getEditableProfileCardForm } from '../../selectors'

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    GlbThunkConfig<ProfileErrors>
>('profile/updateProfileData', async (_, thunkAPI) => {
    try {
        const formData = getEditableProfileCardForm(thunkAPI.getState())

        const errors = validateProfileData(formData)
        if (errors.length) {
            return thunkAPI.rejectWithValue(errors)
        }

        if (!formData?.id) {
            return thunkAPI.rejectWithValue(
                Array.from(new Set([...errors, 'NO_DATA'] as const))
            )
        }

        const response = await thunkAPI.extra.api.put<Profile>(
            `/profile/${formData.id}`,
            formData
        )
        return response.data
    } catch (e) {
        return thunkAPI.rejectWithValue(['SERVER_ERROR'])
    }
})
