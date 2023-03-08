import { type DeepPartial } from '@reduxjs/toolkit'
import { firstName } from './firstName'

describe('firstName', () => {
    it('should return firstName', () => {
        const expected = 'firstname'
        const state: DeepPartial<Required<GlbAppState>> = {
            profile: { data: { first: expected } },
        }
        expect(firstName(state as GlbAppState)).toEqual(expected)
    })

    it('should work with empty state', () => {
        const state: DeepPartial<Required<GlbAppState>> = {}

        expect(firstName(state as GlbAppState)).toEqual('')
    })
})
