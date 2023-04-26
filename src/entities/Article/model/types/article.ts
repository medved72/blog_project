import { type ArticleDto } from '@/shared/api/types'
import { type ValueOf } from '@/shared/types'

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

export interface Article extends Omit<ArticleDto, 'type'> {
    type: ArticleType[]
}
