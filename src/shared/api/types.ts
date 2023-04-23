export type UserRoleDto = 'ADMIN' | 'USER' | 'MANAGER'

export interface UserDto {
    id: string
    username: string
    avatar?: string
    roles: UserRoleDto[]
}
