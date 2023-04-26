import { type DeepPartial } from '@reduxjs/toolkit'

import { getEditableProfileCardReadOnly } from './getEditableProfileCardReadOnly.selector'

describe('readOnly', () => {
    it('should return validationErrors', () => {
        const expected = true
        const state: DeepPartial<Required<GlbAppState>> = {
            editableProfileCard: { readonly: expected },
        }
        expect(getEditableProfileCardReadOnly(state as GlbAppState)).toEqual(
            expected
        )
    })

    it('should work with empty state', () => {
        const state: DeepPartial<Required<GlbAppState>> = {}

        expect(getEditableProfileCardReadOnly(state as GlbAppState)).toEqual(
            true
        )
    })
})
