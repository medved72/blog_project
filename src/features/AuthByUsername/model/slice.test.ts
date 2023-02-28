import { type DeepPartial } from '@reduxjs/toolkit'
import { type LoginSchema } from './types'
import { actions, reducer } from './slice'

describe('slice', () => {
    it('testSetUsername', () => {
        const state: DeepPartial<Required<LoginSchema>> = { username: 'idle' }

        expect(
            reducer(state as LoginSchema, actions.setUsername('expected'))
        ).toEqual({ username: 'expected' })
    })

    it('testSetPassword', () => {
        const state: DeepPartial<Required<LoginSchema>> = { password: 'idle' }

        expect(
            reducer(state as LoginSchema, actions.setPassword('expected'))
        ).toEqual({ password: 'expected' })
    })
})
