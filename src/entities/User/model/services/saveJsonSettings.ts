import { createAsyncThunk } from '@reduxjs/toolkit'

import { type UserJsonSettingsDto } from '@/shared/api/types'

import { getUserAuthData } from '../../model/selectors/getUserAuthData.selector'
import { setJsonSettingsMutation } from '../../api/user.api'

export const saveJsonSettings = createAsyncThunk<
    UserJsonSettingsDto,
    UserJsonSettingsDto,
    GlbThunkConfig<string>
>('user/saveJsonSettings', async (jsonSettings, thunkAPI) => {
    const userData = getUserAuthData(thunkAPI.getState())
    if (!userData) {
        return thunkAPI.rejectWithValue('UNKNOWN_ERROR')
    }
    const { jsonSettings: currentJsonSettings } = userData

    try {
        const response = await thunkAPI
            .dispatch(
                setJsonSettingsMutation({
                    userId: userData.id,
                    jsonSettings: {
                        ...currentJsonSettings,
                        ...jsonSettings,
                    },
                })
            )
            .unwrap()

        if (!response.jsonSettings) {
            return thunkAPI.rejectWithValue('UNKNOWN_ERROR')
        }

        return response.jsonSettings
    } catch (e) {
        return thunkAPI.rejectWithValue('UNKNOWN_ERROR')
    }
})
