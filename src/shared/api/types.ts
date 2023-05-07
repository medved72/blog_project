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
    featureFlags: FeatureFlags
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
