export type ValidateProfileError =
    | 'NO_DATA'
    | 'INCORRECT_USER_DATA'
    | 'INCORRECT_AGE'
    | 'INCORRECT_COUNTRY'
    | 'SERVER_ERROR'

export type ProfileErrors = ValidateProfileError[]
