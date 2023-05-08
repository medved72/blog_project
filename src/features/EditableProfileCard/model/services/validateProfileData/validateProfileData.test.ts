import { profilesMock } from '@/entities/Profile/testing'

import { validateProfileData } from './validateProfileData'

const [profile] = profilesMock

describe('validateProfileData', () => {
    it('success', async () => {
        const result = validateProfileData(profile)
        expect(result).toEqual([])
    })

    it('without last name', async () => {
        const result = validateProfileData({ ...profile, first: undefined })
        expect(result).toEqual(['INCORRECT_USER_DATA'])
    })

    it('without last name', async () => {
        const result = validateProfileData({ ...profile, lastname: undefined })
        expect(result).toEqual(['INCORRECT_USER_DATA'])
    })

    it('incorrect age', async () => {
        const result = validateProfileData({ ...profile, age: NaN })
        expect(result).toEqual(['INCORRECT_AGE'])
    })

    it('without country', async () => {
        const result = validateProfileData({ ...profile, country: undefined })
        expect(result).toEqual(['INCORRECT_COUNTRY'])
    })

    it('without all', async () => {
        const result = validateProfileData({
            id: profile.id,
            username: profile.username,
        })
        expect(result).toEqual([
            'INCORRECT_USER_DATA',
            'INCORRECT_AGE',
            'INCORRECT_COUNTRY',
        ])
    })
})
