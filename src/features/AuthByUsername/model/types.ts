export type LoginStateError =
    | 'ERROR_INCORRECT_USERNAME_OR_PASSWORD'
    | 'ERROR_UNKNOWN_ERROR'

export interface LoginState {
    username: string
    password: string
    isLoading: boolean
    error?: LoginStateError
}
