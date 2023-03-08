import { type DeepPartial } from '@reduxjs/toolkit'
import { readOnly } from './readOnly'

describe('readOnly', () => {
    it('should return validationErrors', () => {
        const expected = true
        const state: DeepPartial<Required<GlbAppState>> = {
            profile: { readonly: expected },
        }
        expect(readOnly(state as GlbAppState)).toEqual(expected)
    })

    it('should work with empty state', () => {
        const state: DeepPartial<Required<GlbAppState>> = {}

        expect(readOnly(state as GlbAppState)).toEqual(undefined)
    })
})
