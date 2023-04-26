import { type DeepPartial } from '@reduxjs/toolkit'

import { getUsername } from './getUsername'

describe('getUsername', () => {
    it('should return profile', () => {
        const state: DeepPartial<Required<GlbAppState>> = {
            loginForm: { username: 'username' },
        }

        expect(getUsername(state as GlbAppState)).toEqual('username')
    })

    it('should work with empty state', () => {
        const state: DeepPartial<Required<GlbAppState>> = {}
        expect(getUsername(state as GlbAppState)).toEqual('')
    })
})
