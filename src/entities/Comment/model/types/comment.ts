import { type UserDto } from '@/shared/api/types'

export interface CommentDto {
    id: string
    user: UserDto
    text: string
}
