import { type UserDto } from '@/shared/api/types'

export interface UserState {
    authData?: UserDto
    __initialized?: boolean
}
