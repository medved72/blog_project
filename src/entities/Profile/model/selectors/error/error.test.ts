import { type DeepPartial } from '@reduxjs/toolkit'
import { error } from './error'

describe('error', () => {
    it('should return error', () => {
        const expected = [
            'INCORRECT_COUNTRY' as const,
            'INCORRECT_AGE' as const,
        ]
        const state: DeepPartial<Required<GlbAppState>> = {
            profile: { error: expected },
        }
        expect(error(state as GlbAppState)).toEqual(expected)
    })

    it('should work with empty state', () => {
        const state: DeepPartial<Required<GlbAppState>> = {}

        expect(error(state as GlbAppState)).toEqual(undefined)
    })
})
