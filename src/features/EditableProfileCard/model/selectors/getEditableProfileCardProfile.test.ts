import { type DeepPartial } from '@reduxjs/toolkit'
import { getEditableProfileCardProfile } from './getEditableProfileCardProfile.selector'
import { Currency } from 'shared/const/currency'
import { Country } from 'shared/const/country'
import avatar from 'shared/assets/tests/avatar.jpg'

describe('profile', () => {
    it('should return profile', () => {
        const data = {
            first: 'Дмитрий',
            lastname: 'Бобырев',
            age: 24,
            currency: Currency.RUB,
            country: Country.Russia,
            city: 'Tyumen',
            username: 'admin',
            avatar,
        }
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
