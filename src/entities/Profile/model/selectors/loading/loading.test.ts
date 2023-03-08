import { type DeepPartial } from '@reduxjs/toolkit'
import { loading } from './loading'

describe('loading', () => {
    it('should return validationErrors', () => {
        const expected = true
        const state: DeepPartial<Required<GlbAppState>> = {
            profile: { status: 'loading' },
        }
        expect(loading(state as GlbAppState)).toEqual(expected)
    })

    it('should work with empty state', () => {
        const state: DeepPartial<Required<GlbAppState>> = {}

        expect(loading(state as GlbAppState)).toEqual(false)
    })
})
