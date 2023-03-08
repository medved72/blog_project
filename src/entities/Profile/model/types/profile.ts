import { type Currency } from 'entities/Currency'
import { type Country } from 'entities/Country'

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
