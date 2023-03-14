export interface User {
    id: string
    username: string
    avatar?: string
}

export interface UserState {
    authData?: User
    __initialized?: boolean
}
