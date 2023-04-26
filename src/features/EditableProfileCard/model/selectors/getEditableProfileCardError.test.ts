import { type DeepPartial } from '@reduxjs/toolkit'

import { getEditableProfileCardError } from './getEditableProfileCardError.selector'

describe('error', () => {
    it('should return error', () => {
        const expected = [
            'INCORRECT_COUNTRY' as const,
            'INCORRECT_AGE' as const,
        ]
        const state: DeepPartial<Required<GlbAppState>> = {
            editableProfileCard: { error: expected },
        }
        expect(getEditableProfileCardError(state as GlbAppState)).toEqual(
            expected
        )
    })

    it('should work with empty state', () => {
        const state: DeepPartial<Required<GlbAppState>> = {}

        expect(getEditableProfileCardError(state as GlbAppState)).toEqual(
            undefined
        )
    })
})
