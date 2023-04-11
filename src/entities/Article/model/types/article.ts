import { type UserDto } from 'entities/User'
import { type ValueOf } from 'shared/types'

export const articleTypes = [
    'All',
    'Array',
    'Transmitter',
    'Matrix',
    'System',
    'Alarm',
    'Application',
    'Panel',
    'Interface',
    'Port',
    'Card',
    'Firewall',
    'Microchip',
    'Feed',
    'Sensor',
    'Program',
    'Capacitor',
    'Bus',
    'Hard drive',
    'Protocol',
    'Bandwidth',
    'Monitor',
    'Driver',
    'Pixel',
    'Circuit',
] as const
export type ArticleType = (typeof articleTypes)[number]

export const ArticleSortField = {
    views: 'views',
    title: 'title',
    createdAt: 'createdAt',
} as const
export type ArticleSortFieldValues = ValueOf<typeof ArticleSortField>

export type ArticleBlockType = 'TEXT' | 'CODE' | 'IMAGE'

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
    user: UserDto
    title: string
    subtitle: string
    img: string
    views: number
    createdAt: string
    type: ArticleType[]
    blocks: ArticleBlock[]
}
