import { type DeepPartial } from '@reduxjs/toolkit'
import { form } from './form'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import avatar from 'shared/assets/tests/avatar.jpg'

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
            profile: { form: expected },
        }
        expect(form(state as GlbAppState)).toEqual(expected)
    })

    it('should work with empty state', () => {
        const state: DeepPartial<Required<GlbAppState>> = {}

        expect(form(state as GlbAppState)).toEqual(undefined)
    })
})
