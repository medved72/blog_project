import { type DeepPartial } from '@reduxjs/toolkit'

import { getLoading } from './getLoading'

describe('getLoading', () => {
    it('should return profile', () => {
        const state: DeepPartial<Required<GlbAppState>> = {
            loginForm: { isLoading: true },
        }

        expect(getLoading(state as GlbAppState)).toEqual(true)
    })

    it('should work with empty state', () => {
        const state: DeepPartial<Required<GlbAppState>> = {}
        expect(getLoading(state as GlbAppState)).toEqual(false)
    })
})
