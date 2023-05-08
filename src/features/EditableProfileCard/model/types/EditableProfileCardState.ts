import {
    type ProfileErrors,
    type ValidateProfileError,
} from '@/entities/Profile'

import { type ProfileDto } from '@/shared/api/types'

export interface EditableProfileCardState {
    status: 'idle' | 'loading' | 'fulfilled' | 'error'
    data?: ProfileDto
    form?: Partial<ProfileDto>
    error?: ProfileErrors
    readonly?: boolean
    validateError: ValidateProfileError[]
}
