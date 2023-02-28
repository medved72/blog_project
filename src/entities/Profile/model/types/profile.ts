import { type Country, type Currency } from 'shared/const/common'

export interface Profile {
    first: string
    lastname: string
    age: number
    currency: Currency
    country: Country
    city: string
    username: string
    avatar: string
}

export interface ProfileState {
    status: 'idle' | 'loading' | 'fulfilled' | 'error'
    data?: Profile
    error?: string
    readonly?: boolean
}
