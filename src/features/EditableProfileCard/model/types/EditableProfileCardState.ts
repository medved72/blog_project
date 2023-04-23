import {
    type Profile,
    type ProfileErrors,
    type ValidateProfileError,
} from '@/entities/Profile'

export interface EditableProfileCardState {
    status: 'idle' | 'loading' | 'fulfilled' | 'error'
    data?: Profile
    form?: Profile
    error?: ProfileErrors
    readonly?: boolean
    validateError: ValidateProfileError[]
}
