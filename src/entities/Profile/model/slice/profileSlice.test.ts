import { type DeepPartial } from '@reduxjs/toolkit'
import { type Profile, type ProfileState } from '../types/profile'
import { actions, reducer } from './profileSlice'
import avatar from 'shared/assets/tests/avatar.jpg'
import { updateProfileData } from '../services/updateProfileData'

const profile = {
    first: 'Дмитрий',
    lastname: 'Бобырев',
    age: 24,
    currency: 'RUB',
    country: 'Russia',
    city: 'Tyumen',
    username: 'admin',
    avatar,
} as Profile

describe('profileSlice', () => {
    it('setReadOnly', () => {
        const state: DeepPartial<Required<ProfileState>> = { readonly: false }

        expect(
            reducer(state as ProfileState, actions.setReadOnly(true))
        ).toEqual({ readonly: true })
    })

    it('setReadOnly', () => {
        const state: DeepPartial<Required<ProfileState>> = { readonly: false }

        expect(
            reducer(state as ProfileState, actions.setReadOnly(true))
        ).toEqual({ readonly: true })
    })

    it.each([
        { field: 'first', initial: '', expected: 'first' },
        { field: 'lastname', initial: '', expected: 'lastname' },
        { field: 'age', initial: '', expected: 'age' },
        { field: 'currency', initial: '', expected: 'currency' },
        { field: 'country', initial: '', expected: 'country' },
        { field: 'city', initial: '', expected: 'city' },
        { field: 'username', initial: '', expected: 'username' },
        { field: 'avatar', initial: '', expected: 'avatar' },
    ])('updateProfile $field', ({ field, initial, expected }) => {
        const state: DeepPartial<Required<ProfileState>> = {
            form: { [field]: initial },
        }

        expect(
            reducer(
                state as ProfileState,
                actions.updateProfile({ [field]: expected })
            )
        ).toEqual({ form: { [field]: expected } })
    })

    it('cancelEdit', () => {
        const state: DeepPartial<Required<ProfileState>> = {
            readonly: false,
            data: profile,
            form: { first: 'first', lastname: 'lastName' },
            validateError: ['INCORRECT_COUNTRY'],
        }

        expect(reducer(state as ProfileState, actions.cancelEdit())).toEqual({
            readonly: true,
            data: profile,
            form: profile,
            validateError: [],
        })
    })

    it('update profile service pending', () => {
        const state: DeepPartial<Required<ProfileState>> = {
            validateError: ['INCORRECT_COUNTRY'],
            status: 'idle',
        }

        expect(
            reducer(state as ProfileState, updateProfileData.pending)
        ).toEqual({
            status: 'loading',
            validateError: [],
        })
    })

    it('update profile service fulfilled', () => {
        const state: DeepPartial<Required<ProfileState>> = {
            validateError: ['INCORRECT_COUNTRY'],
            status: 'idle',
            form: { first: 'first', lastname: 'lastName' },
            readonly: false,
        }

        expect(
            reducer(
                state as ProfileState,
                updateProfileData.fulfilled(profile, '')
            )
        ).toEqual({
            status: 'fulfilled',
            data: profile,
            form: profile,
            readonly: true,
            validateError: [],
        })
    })
})
