import { TestAsyncThunk } from 'shared/lib/tests'
import { updateProfileData } from './updateProfileData'
import avatar from 'shared/assets/tests/avatar.jpg'
import { type Profile } from 'entities/Profile'

const profile = {
    id: '1',
    first: 'Дмитрий',
    lastname: 'Бобырев',
    age: 24,
    currency: 'RUB',
    country: 'Russia',
    city: 'Tyumen',
    username: 'admin',
    avatar,
} as Profile

describe('updateProfileData', () => {
    it('success', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            editableProfileCard: { form: profile },
        })
        thunk.api.put.mockResolvedValue({ data: profile })

        const result = await thunk.callThunk()
        expect(thunk.api.put).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(profile)
        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    })

    it('reject validation', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            editableProfileCard: { form: { id: '1' } },
        })

        const result = await thunk.callThunk()
        expect(thunk.api.put).not.toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([
            'INCORRECT_USER_DATA',
            'INCORRECT_AGE',
            'INCORRECT_COUNTRY',
        ])
        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    })

    it('reject no data', async () => {
        const thunk = new TestAsyncThunk(updateProfileData)

        const result = await thunk.callThunk()
        expect(thunk.api.put).not.toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual(['NO_DATA'])
        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    })

    it('reject server', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            editableProfileCard: { form: profile },
        })
        thunk.api.put.mockRejectedValue({})

        const result = await thunk.callThunk()
        expect(thunk.api.put).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual(['SERVER_ERROR'])
        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    })
})
