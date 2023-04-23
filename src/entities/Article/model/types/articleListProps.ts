import { type HTMLAttributeAnchorTarget } from 'react'
import { type Article } from './article'

export type ArticleListViewMode = 'tile' | 'list'

export interface ArticleListProps {
    className?: string
    articles: Article[]
    loading?: boolean
    view?: ArticleListViewMode
    target?: HTMLAttributeAnchorTarget
}
