import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Profile } from '@/entities/Profile'
import { type ProfileErrors } from '../../types/EditableProfileCardState'

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
