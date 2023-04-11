import { type UserDto } from 'entities/User'

export interface Comment {
    id: string
    user: UserDto
    text: string
}
