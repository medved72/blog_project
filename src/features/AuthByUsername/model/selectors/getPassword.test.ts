import { type DeepPartial } from '@reduxjs/toolkit'
import { getPassword } from './getPassword'

describe('getPassword', () => {
    it('should return error', () => {
        const state: DeepPartial<Required<AppState>> = {
            loginForm: { password: 'password' },
        }

        expect(getPassword(state as AppState)).toEqual('password')
    })

    it('should work with empty state', () => {
        const state: DeepPartial<Required<AppState>> = {}
        expect(getPassword(state as AppState)).toEqual('')
    })
})
