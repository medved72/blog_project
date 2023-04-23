import { type Profile, type ValidateProfileError } from '@/entities/Profile'

export const validateProfileData = (
    profile?: Profile
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
