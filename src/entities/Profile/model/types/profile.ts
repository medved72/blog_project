import { type Currency } from 'shared/const/currency'
import { type Country } from 'shared/const/country'

export type ValidateProfileError =
    | 'NO_DATA'
    | 'INCORRECT_USER_DATA'
    | 'INCORRECT_AGE'
    | 'INCORRECT_COUNTRY'
    | 'SERVER_ERROR'

export interface Profile {
    id?: string
    first?: string
    lastname?: string
    age?: number
    currency?: Currency
    country?: Country
    city?: string
    username?: string
    avatar?: string
}

export type ProfileErrors = ValidateProfileError[]

export interface ProfileState {
    status: 'idle' | 'loading' | 'fulfilled' | 'error'
    data?: Profile
    form?: Profile
    error?: ProfileErrors
    readonly?: boolean
    validateError: ValidateProfileError[]
}
