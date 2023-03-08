import { TestAsyncThunk } from 'shared/lib/tests'
import { fetchProfileData } from './fetchProfileData'
import avatar from 'shared/assets/tests/avatar.jpg'

const profile = {
    first: 'Дмитрий',
    lastname: 'Бобырев',
    age: 24,
    currency: 'RUB',
    country: 'Russia',
    city: 'Tyumen',
    username: 'admin',
    avatar,
}

describe('fetchProfileData', () => {
    it('success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockResolvedValue({ data: profile })

        const result = await thunk.callThunk()
        expect(thunk.api.get).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(profile)
        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    })

    it('reject', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockRejectedValue({})

        const result = await thunk.callThunk()
        expect(thunk.api.get).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual(['SERVER_ERROR'])
        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    })
})
