import { type DeepPartial } from '@reduxjs/toolkit'
import { getLoading } from './getLoading'

describe('getLoading', () => {
    it('should return error', () => {
        const state: DeepPartial<Required<AppState>> = {
            loginForm: { isLoading: true },
        }

        expect(getLoading(state as AppState)).toEqual(true)
    })

    it('should work with empty state', () => {
        const state: DeepPartial<Required<AppState>> = {}
        expect(getLoading(state as AppState)).toEqual(false)
    })
})
