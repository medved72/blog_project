import { type DeepPartial } from '@reduxjs/toolkit'

import { profilesMock } from '@/entities/Profile/testing'

import { getEditableProfileCardProfile } from './getEditableProfileCardProfile.selector'

describe('profile', () => {
    it('should return profile', () => {
        const [data] = profilesMock

        const state: DeepPartial<Required<GlbAppState>> = {
            editableProfileCard: { data },
        }

        expect(getEditableProfileCardProfile(state as GlbAppState)).toEqual(
            data
        )
    })

    it('should work with empty state', () => {
        const state: DeepPartial<Required<GlbAppState>> = {}

        expect(getEditableProfileCardProfile(state as GlbAppState)).toEqual(
            undefined
        )
    })
})
