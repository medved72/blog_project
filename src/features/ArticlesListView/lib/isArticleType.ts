import { type ArticleType, articleTypes } from '@/entities/Article'

export const isArticleType = (value: unknown): value is ArticleType => {
    return (
        typeof value === 'string' &&
        !!articleTypes.find((item) => item === value)
    )
}
