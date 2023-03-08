import { type Currency } from 'entities/Currency'
import { type Country } from 'entities/Country'

export type ValidateProfileError =
    | 'NO_DATA'
    | 'INCORRECT_USER_DATA'
    | 'INCORRECT_AGE'
    | 'INCORRECT_COUNTRY'
    | 'SERVER_ERROR'

export interface Profile {
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
