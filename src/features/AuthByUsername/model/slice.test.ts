import { type DeepPartial } from '@reduxjs/toolkit'

import { actions, reducer } from './slice'
import { type LoginState } from './types'

describe('slice', () => {
    it('testSetUsername', () => {
        const state: DeepPartial<Required<LoginState>> = { username: 'idle' }

        expect(
            reducer(state as LoginState, actions.setUsername('expected'))
        ).toEqual({
            username: 'expected',
        })
    })

    it('testSetPassword', () => {
        const state: DeepPartial<Required<LoginState>> = { password: 'idle' }

        expect(
            reducer(state as LoginState, actions.setPassword('expected'))
        ).toEqual({
            password: 'expected',
        })
    })
})
