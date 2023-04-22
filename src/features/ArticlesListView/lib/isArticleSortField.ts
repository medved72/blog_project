import {
    ArticleSortField,
    type ArticleSortFieldValues,
} from '@/entities/Article'

export const isArticleSortField = (
    value: unknown
): value is ArticleSortFieldValues => {
    const items = Object.values(ArticleSortField)
    return typeof value === 'string' && !!items.find((item) => item === value)
}
