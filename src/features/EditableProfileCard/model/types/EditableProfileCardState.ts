import { type Profile } from 'entities/Profile'

export type ValidateProfileError =
    | 'NO_DATA'
    | 'INCORRECT_USER_DATA'
    | 'INCORRECT_AGE'
    | 'INCORRECT_COUNTRY'
    | 'SERVER_ERROR'

export type ProfileErrors = ValidateProfileError[]
export interface EditableProfileCardState {
    status: 'idle' | 'loading' | 'fulfilled' | 'error'
    data?: Profile
    form?: Profile
    error?: ProfileErrors
    readonly?: boolean
    validateError: ValidateProfileError[]
}
