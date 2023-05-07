import { createAsyncThunk } from '@reduxjs/toolkit'

import { actions } from '@/entities/User'

import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage'
import { type UserDto } from '@/shared/api/types'

import { type LoginStateError } from '../types'

interface LoginByUsernameBody {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<
    UserDto,
    LoginByUsernameBody,
    GlbThunkConfig<LoginStateError>
>('login/loginByUsername', async (body, thunkAPI) => {
    try {
        const response = await thunkAPI.extra.api.post<UserDto>('/login', body)

        if (!response.data) {
            return thunkAPI.rejectWithValue('ERROR_UNKNOWN_ERROR')
        }

        localStorage.setItem(
            USER_LOCALSTORAGE_KEY,
            JSON.stringify(response.data)
        )

        thunkAPI.dispatch(actions.setAuthData(response.data))

        return response.data
    } catch (e) {
        return thunkAPI.rejectWithValue('ERROR_INCORRECT_USERNAME_OR_PASSWORD')
    }
})
