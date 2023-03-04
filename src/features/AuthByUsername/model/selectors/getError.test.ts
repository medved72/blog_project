import { type DeepPartial } from '@reduxjs/toolkit'
import { getError } from './getError'

describe('getError', () => {
    it('should return profile', () => {
        const state: DeepPartial<Required<GlbAppState>> = {
            loginForm: { error: 'ERROR_UNKNOWN_ERROR' },
        }

        expect(getError(state as GlbAppState)).toEqual('ERROR_UNKNOWN_ERROR')
    })

    it('should work with empty state', () => {
        const state: DeepPartial<Required<GlbAppState>> = {}

        expect(getError(state as GlbAppState)).toEqual(undefined)
    })
})
