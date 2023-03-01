import { createAsyncThunk } from '@reduxjs/toolkit'
import { actions, type User } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

interface LoginByUsernameBody {
    username: string
    password: string
}

type RejectValue =
    | 'ERROR_INCORRECT_USERNAME_OR_PASSWORD'
    | 'ERROR_UNKNOWN_ERROR'

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameBody,
    GlbThunkConfig<RejectValue>
>('login/loginByUsername', async (body, thunkAPI) => {
    try {
        const response = await thunkAPI.extra.api.post<User>('/login', body)

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
