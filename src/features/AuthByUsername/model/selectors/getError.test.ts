import { type DeepPartial } from '@reduxjs/toolkit'
import { getError } from './getError'

describe('getError', () => {
    it('should return error', () => {
        const state: DeepPartial<Required<GlbAppState>> = {
            loginForm: { error: 'error' },
        }

        expect(getError(state as GlbAppState)).toEqual('error')
    })

    it('should work with empty state', () => {
        const state: DeepPartial<Required<GlbAppState>> = {}

        expect(getError(state as GlbAppState)).toEqual(undefined)
    })
})
