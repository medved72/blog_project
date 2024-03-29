import { type DeepPartial } from '@reduxjs/toolkit'

import avatar from '@/shared/assets/tests/avatar.jpg'
import { Country } from '@/shared/const/country'
import { Currency } from '@/shared/const/currency'

import { getEditableProfileCardForm } from './getEditableProfileCardForm.selector'

describe('form', () => {
    it('should return validationErrors', () => {
        const expected = {
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
            editableProfileCard: { form: expected },
        }
        expect(getEditableProfileCardForm(state as GlbAppState)).toEqual(
            expected
        )
    })

    it('should work with empty state', () => {
        const state: DeepPartial<Required<GlbAppState>> = {}

        expect(getEditableProfileCardForm(state as GlbAppState)).toEqual(
            undefined
        )
    })
})
