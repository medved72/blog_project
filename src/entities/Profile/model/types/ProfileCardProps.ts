import { type Profile, type ProfileErrors } from './profile'
import { type Currency } from 'shared/const/currency'
import { type Country } from 'shared/const/country'

export interface ProfileCardProps {
    className?: string
    profile?: Profile
    loading?: boolean
    error?: ProfileErrors
    readonly?: boolean
    onChangeFirstName?: (value?: string) => void
    onChangeLastName?: (value?: string) => void
    onChangeCity?: (value?: string) => void
    onChangeAge?: (value?: string) => void
    onChangeUsername?: (value?: string) => void
    onChangeAvatar?: (value?: string) => void
    onChangeCurrency?: (value?: Currency) => void
    onChangeCountry?: (value?: Country) => void
}
