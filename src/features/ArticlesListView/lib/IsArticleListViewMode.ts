import { type ArticleListViewMode } from 'entities/Article'

export const isArticleListViewMode = (
    value: unknown
): value is ArticleListViewMode => {
    return value === 'tile' || value === 'list'
}
