import { type DeepPartial } from '@reduxjs/toolkit'
import { getEditableProfileCardFirstName } from './getEditableProfileCardFirstName.selector'

describe('firstName', () => {
    it('should return getEditableProfileCardFirstName', () => {
        const expected = 'firstname'
        const state: DeepPartial<Required<GlbAppState>> = {
            editableProfileCard: { data: { first: expected } },
        }
        expect(getEditableProfileCardFirstName(state as GlbAppState)).toEqual(
            expected
        )
    })

    it('should work with empty state', () => {
        const state: DeepPartial<Required<GlbAppState>> = {}

        expect(getEditableProfileCardFirstName(state as GlbAppState)).toEqual(
            undefined
        )
    })
})
