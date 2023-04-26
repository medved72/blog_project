import { type Country } from '@/shared/const/country'
import { type Currency } from '@/shared/const/currency'

export interface Profile {
    id?: string
    first?: string
    lastname?: string
    age?: number
    currency?: Currency
    country?: Country
    city?: string
    username?: string
    avatar?: string
}
