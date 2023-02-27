import { type DeepPartial } from '@reduxjs/toolkit'
import { getCounter } from './getCounter'

describe('getCounter', () => {
    it('should return counter state', () => {
        const state = { counter: { value: 1 } } satisfies DeepPartial<AppState>
        expect(getCounter(state as AppState)).toEqual({ value: 1 })
    })
})
