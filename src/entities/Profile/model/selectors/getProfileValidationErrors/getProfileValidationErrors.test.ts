import { type DeepPartial } from '@reduxjs/toolkit'
import { getProfileValidationErrors } from './getProfileValidationErrors'

describe('getProfileValidationErrors', () => {
    it('should return validationErrors', () => {
        const expected = [
            'INCORRECT_COUNTRY' as const,
            'INCORRECT_AGE' as const,
        ]
        const state: DeepPartial<Required<GlbAppState>> = {
            profile: { validateError: expected },
        }
        expect(getProfileValidationErrors(state as GlbAppState)).toEqual(
            expected
        )
    })

    it('should work with empty state', () => {
        const state: DeepPartial<Required<GlbAppState>> = {}

        expect(getProfileValidationErrors(state as GlbAppState)).toEqual(
            undefined
        )
    })
})
