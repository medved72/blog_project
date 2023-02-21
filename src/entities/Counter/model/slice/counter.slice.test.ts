import { reducer, actions } from './counter.slice'
import { type CounterState } from '../types'
describe('counterSlice', function () {
    it('should decrement', () => {
        const state: CounterState = { value: 1 }
        expect(reducer(state, actions.decrement())).toEqual({ value: 0 })
    })

    it('should increment', () => {
        const state: CounterState = { value: 1 }
        expect(reducer(state, actions.increment())).toEqual({ value: 2 })
    })

    it('should work with empty state', () => {
        expect(reducer(undefined, actions.increment())).toEqual({ value: 1 })
    })
})
