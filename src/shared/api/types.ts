import { type Country } from '../const/country'
import { type Currency } from '../const/currency'

export type UserRoleDto = 'ADMIN' | 'USER' | 'MANAGER'

export interface FeatureFlags {
    isArticleRatingEnabled: boolean
    isCounterEnabled: boolean
}

export interface UserDto {
    id: string
    username: string
    avatar?: string
    roles: UserRoleDto[]
    features: FeatureFlags
    jsonSettings?: UserJsonSettingsDto
}

export interface UserJsonSettingsDto {
    theme?: string
    isFirstVisit?: boolean
    settingsPageHasBeenOpen?: boolean
}

export type ArticleBlockType = 'TEXT' | 'CODE' | 'IMAGE'

export interface ArticleBlockBaseDto {
    id: string
    type: ArticleBlockType
}

export interface ArticleTextBlockDto extends ArticleBlockBaseDto {
    type: 'TEXT'
    title: string
    paragraphs: string[]
}

export interface ArticleCodeBlockDto extends ArticleBlockBaseDto {
    type: 'CODE'
    code: string
}

export interface ArticleImageBlockDto extends ArticleBlockBaseDto {
    type: 'IMAGE'
    src: string
    title?: string
}

export type ArticleBlockDto =
    | ArticleTextBlockDto
    | ArticleCodeBlockDto
    | ArticleImageBlockDto

export interface ArticleDto {
    id: string
    user: UserDto
    title: string
    subtitle: string
    img: string
    views: number
    createdAt: string
    type: string[]
    blocks: ArticleBlockDto[]
}

export interface ProfileDto {
    id: string
    first?: string
    lastname?: string
    age?: number
    currency?: Currency
    country?: Country
    city?: string
    username: string
    avatar?: string
}

export interface RatingDto {
    rate: number
    feedback: string
}

export interface NotificationDto {
    id: string
    title: string
    description: string
    userId: string
    href?: string
}
