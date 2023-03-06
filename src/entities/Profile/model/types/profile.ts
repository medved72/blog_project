import { type Country, type Currency } from 'shared/const/common'

export interface Profile {
    first?: string
    lastname?: string
    age?: number
    currency?: Currency
    country?: Country
    city?: string
    username?: string
    avatar?: string
}

export type ProfileErrors = 'ERROR_UNKNOWN_ERROR'

export interface ProfileState {
    status: 'idle' | 'loading' | 'fulfilled' | 'error'
    data?: Profile
    form?: Profile
    error?: ProfileErrors
    readonly?: boolean
}
