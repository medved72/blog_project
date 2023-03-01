import { type DeepPartial } from '@reduxjs/toolkit'
import { getCounterValue } from './getCounterValue'

describe('getCounterValue', () => {
    it('should return counter value', () => {
        const state = {
            counter: { value: 1 },
        } satisfies DeepPartial<GlbAppState>

        expect(getCounterValue(state as GlbAppState)).toEqual(1)
    })
})
