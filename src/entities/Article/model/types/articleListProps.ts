import { type Article } from './article'
import { type HTMLAttributeAnchorTarget } from 'react'

export type ArticleListViewMode = 'tile' | 'list'

export interface ArticleListProps {
    className?: string
    articles: Article[]
    loading?: boolean
    view?: ArticleListViewMode
    target?: HTMLAttributeAnchorTarget
}
