import { type DeepPartial } from '@reduxjs/toolkit'
import { getCounterValue } from './getCounterValue'

describe('getCounterValue', () => {
    it('should return counter value', () => {
        const state = { counter: { value: 1 } } satisfies DeepPartial<AppState>

        expect(getCounterValue(state as AppState)).toEqual(1)
    })
})
