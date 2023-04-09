import { type DeepPartial } from '@reduxjs/toolkit'
import { getEditableProfileCardLoading } from './getEditableProfileCardLoading.selector'

describe('loading', () => {
    it('should return validationErrors', () => {
        const expected = true
        const state: DeepPartial<Required<GlbAppState>> = {
            editableProfileCard: { status: 'loading' },
        }
        expect(getEditableProfileCardLoading(state as GlbAppState)).toEqual(
            expected
        )
    })

    it('should work with empty state', () => {
        const state: DeepPartial<Required<GlbAppState>> = {}

        expect(getEditableProfileCardLoading(state as GlbAppState)).toEqual(
            false
        )
    })
})
