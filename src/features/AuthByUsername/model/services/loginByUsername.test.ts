import { TestAsyncThunk } from '@/shared/lib/tests'
import { loginByUsername } from './loginByUsername'
import { actions, type UserDto } from '@/entities/User'

describe('loginByUsername', () => {
    it('success login', async () => {
        const thunk = new TestAsyncThunk(loginByUsername)
        const user: Required<UserDto> = {
            id: '1',
            username: 'username',
            roles: ['ADMIN'],
            avatar: '',
        }
        thunk.api.post.mockResolvedValue({ data: user })

        const result = await thunk.callThunk({
            username: 'username',
            password: 'password',
        })
        expect(thunk.api.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(user)
        expect(thunk.dispatch).toHaveBeenCalledWith(actions.setAuthData(user))
        expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    })

    it('profile login', async () => {
        const thunk = new TestAsyncThunk(loginByUsername)
        thunk.api.post.mockRejectedValue({})

        const result = await thunk.callThunk({
            username: 'username',
            password: 'password',
        })
        expect(thunk.api.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe('ERROR_INCORRECT_USERNAME_OR_PASSWORD')
        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    })

    it('profile no data', async () => {
        const thunk = new TestAsyncThunk(loginByUsername)
        thunk.api.post.mockResolvedValue({})

        const result = await thunk.callThunk({
            username: 'username',
            password: 'password',
        })
        expect(thunk.api.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe('ERROR_UNKNOWN_ERROR')
        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    })
})
