import { createAsyncThunk } from '@reduxjs/toolkit'

import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage'
import { type UserDto } from '@/shared/api/types'

import { getUserDataByIdQuery } from '../../api/user.api'

export const initAuthData = createAsyncThunk<
    UserDto,
    void,
    GlbThunkConfig<string>
>('user/initAuthData', async (_, thunkAPI) => {
    const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY)

    if (!userId) {
        return thunkAPI.rejectWithValue('UNKNOWN_ERROR')
    }

    try {
        return await thunkAPI.dispatch(getUserDataByIdQuery(userId)).unwrap()
    } catch (e) {
        return thunkAPI.rejectWithValue('UNKNOWN_ERROR')
    }
})
