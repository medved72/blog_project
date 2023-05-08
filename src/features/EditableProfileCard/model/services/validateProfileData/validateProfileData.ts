import { type ValidateProfileError } from '@/entities/Profile'

import { type ProfileDto } from '@/shared/api/types'

export const validateProfileData = (
    profile?: Partial<ProfileDto>
): ValidateProfileError[] => {
    if (!profile) {
        return ['NO_DATA']
    }

    const { first, lastname, age, country } = profile

    const errors: ValidateProfileError[] = []

    if (!first || !lastname) {
        errors.push('INCORRECT_USER_DATA')
    }

    if (!age || !Number.isInteger(age)) {
        errors.push('INCORRECT_AGE')
    }

    if (!country) {
        errors.push('INCORRECT_COUNTRY')
    }

    return errors
}
