import { type DeepPartial } from '@reduxjs/toolkit'

import { getPassword } from './getPassword'

describe('getPassword', () => {
    it('should return profile', () => {
        const state: DeepPartial<Required<GlbAppState>> = {
            loginForm: { password: 'password' },
        }

        expect(getPassword(state as GlbAppState)).toEqual('password')
    })

    it('should work with empty state', () => {
        const state: DeepPartial<Required<GlbAppState>> = {}
        expect(getPassword(state as GlbAppState)).toEqual('')
    })
})
