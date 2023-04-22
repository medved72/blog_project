import { type UserDto } from '@/entities/User'

export interface CommentDto {
    id: string
    user: UserDto
    text: string
}
