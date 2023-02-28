import { type DeepPartial } from '@reduxjs/toolkit'
import { getError } from './getError'

describe('getError', () => {
    it('should return error', () => {
        const state: DeepPartial<Required<AppState>> = {
            loginForm: { error: 'error' },
        }

        expect(getError(state as AppState)).toEqual('error')
    })

    it('should work with empty state', () => {
        const state: DeepPartial<Required<AppState>> = {}

        expect(getError(state as AppState)).toEqual(undefined)
    })
})
