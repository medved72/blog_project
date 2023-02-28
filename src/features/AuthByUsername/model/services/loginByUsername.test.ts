import axios from 'axios'
import { loginByUsername } from './loginByUsername'
import { actions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests'

jest.mock('axios')

const mockedAxios = jest.mocked(axios)

describe('loginByUsername', () => {
    it('success login', async () => {
        const thunk = new TestAsyncThunk(loginByUsername)
        const user = { id: '1', username: 'username' }
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: user }))

        const result = await thunk.callThunk({
            username: 'username',
            password: 'password',
        })
        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(user)
        expect(thunk.dispatch).toHaveBeenCalledWith(actions.setAuthData(user))
        expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    })

    it('error login', async () => {
        const thunk = new TestAsyncThunk(loginByUsername)
        mockedAxios.post.mockReturnValue(Promise.reject())

        const result = await thunk.callThunk({
            username: 'username',
            password: 'password',
        })
        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe('ERROR_INCORRECT_USERNAME_OR_PASSWORD')
        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    })

    it('error no data', async () => {
        const thunk = new TestAsyncThunk(loginByUsername)
        mockedAxios.post.mockReturnValue(Promise.resolve({}))

        const result = await thunk.callThunk({
            username: 'username',
            password: 'password',
        })
        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe('ERROR_UNKNOWN_ERROR')
        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    })
})
