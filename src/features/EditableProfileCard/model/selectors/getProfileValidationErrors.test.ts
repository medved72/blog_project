import { type DeepPartial } from '@reduxjs/toolkit'

import { getProfileValidationErrors } from './getProfileValidationErrors.selector'

describe('getProfileValidationErrors', () => {
    it('should return validationErrors', () => {
        const expected = [
            'INCORRECT_COUNTRY' as const,
            'INCORRECT_AGE' as const,
        ]
        const state: DeepPartial<Required<GlbAppState>> = {
            editableProfileCard: { validateError: expected },
        }
        expect(getProfileValidationErrors(state as GlbAppState)).toEqual(
            expected
        )
    })

    it('should work with empty state', () => {
        const state: DeepPartial<Required<GlbAppState>> = {}

        expect(getProfileValidationErrors(state as GlbAppState)).toEqual([])
    })
})
