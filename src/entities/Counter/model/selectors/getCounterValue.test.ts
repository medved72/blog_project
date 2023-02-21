import { type DeepPartial } from '@reduxjs/toolkit'
import { getCounterValue } from './getCounterValue'

describe('getCounterValue', () => {
    it('should return counter value', () => {
        const state = { counter: { value: 1 } } satisfies DeepPartial<RootState>

        expect(getCounterValue(state as RootState)).toEqual(1)
    })
})
