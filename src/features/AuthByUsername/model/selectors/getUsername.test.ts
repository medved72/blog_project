import { type DeepPartial } from '@reduxjs/toolkit'
import { getUsername } from './getUsername'

describe('getUsername', () => {
    it('should return error', () => {
        const state: DeepPartial<Required<AppState>> = {
            loginForm: { username: 'username' },
        }

        expect(getUsername(state as AppState)).toEqual('username')
    })

    it('should work with empty state', () => {
        const state: DeepPartial<Required<AppState>> = {}
        expect(getUsername(state as AppState)).toEqual('')
    })
})
