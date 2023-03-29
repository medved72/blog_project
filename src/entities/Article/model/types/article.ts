import { type User } from 'entities/User'
import { type ValueOf } from 'shared/types'

export const ArticleSortField = {
    views: 'views',
    title: 'title',
    createdAt: 'createdAt',
} as const
export type ArticleSortFieldValues = ValueOf<typeof ArticleSortField>

export type ArticleBlockType = 'TEXT' | 'CODE' | 'IMAGE'

export type ArticleType = 'IT' | 'SCIENCE' | 'ECONOMICS'

export interface ArticleBlockBase {
    id: string
    type: ArticleBlockType
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: 'TEXT'
    title: string
    paragraphs: string[]
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: 'CODE'
    code: string
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: 'IMAGE'
    src: string
    title?: string
}

export type ArticleBlock =
    | ArticleTextBlock
    | ArticleCodeBlock
    | ArticleImageBlock

export interface Article {
    id: string
    user: User
    title: string
    subtitle: string
    img: string
    views: number
    createdAt: string
    type: ArticleType[]
    blocks: ArticleBlock[]
}
