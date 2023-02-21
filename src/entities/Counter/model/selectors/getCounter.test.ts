import { type DeepPartial } from '@reduxjs/toolkit'
import { getCounter } from './getCounter'

describe('getCounter', () => {
    it('should return counter state', () => {
        const state = { counter: { value: 1 } } satisfies DeepPartial<RootState>
        expect(getCounter(state as RootState)).toEqual({ value: 1 })
    })
})
