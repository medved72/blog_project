import avatar from '@/shared/assets/tests/avatar.jpg'
import { updateProfileData } from '../services/updateProfileData'
import { type Profile } from '@/entities/Profile'
import { type EditableProfileCardState } from '../types/EditableProfileCardState'
import {
    editableProfileCardActions,
    editableProfileCardReducer,
} from './editableProfileCard.slice'

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
        const state = {
            readonly: false,
        } as EditableProfileCardState

        expect(
            editableProfileCardReducer(
                state,
                editableProfileCardActions.setReadOnly(true)
            )
        ).toEqual({
            readonly: true,
        })
    })

    it('setReadOnly', () => {
        const state = {
            readonly: false,
        } as EditableProfileCardState

        expect(
            editableProfileCardReducer(
                state,
                editableProfileCardActions.setReadOnly(true)
            )
        ).toEqual({
            readonly: true,
        })
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
        const state = {
            form: { [field]: initial },
        } as unknown as EditableProfileCardState

        expect(
            editableProfileCardReducer(
                state,
                editableProfileCardActions.updateProfile({ [field]: expected })
            )
        ).toEqual({ form: { [field]: expected } })
    })

    it('cancelEdit', () => {
        const state = {
            readonly: false,
            data: profile,
            form: { first: 'first', lastname: 'lastName' },
            validateError: ['INCORRECT_COUNTRY'],
        } as EditableProfileCardState

        expect(
            editableProfileCardReducer(
                state,
                editableProfileCardActions.cancelEdit()
            )
        ).toEqual({
            readonly: true,
            data: profile,
            form: profile,
            validateError: [],
        })
    })

    it('update profile service pending', () => {
        const state = {
            validateError: ['INCORRECT_COUNTRY'],
            status: 'idle',
        } as EditableProfileCardState

        expect(
            editableProfileCardReducer(state, updateProfileData.pending)
        ).toEqual({
            status: 'loading',
            validateError: [],
        })
    })

    it('update profile service fulfilled', () => {
        const state = {
            validateError: ['INCORRECT_COUNTRY'],
            status: 'idle',
            form: { first: 'first', lastname: 'lastName' },
            readonly: false,
        } as EditableProfileCardState

        expect(
            editableProfileCardReducer(
                state,
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
