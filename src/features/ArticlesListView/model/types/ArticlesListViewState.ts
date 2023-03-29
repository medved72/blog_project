import { type EntityState } from '@reduxjs/toolkit'
import {
    type Article,
    type ArticleListViewMode,
    type ArticleSortFieldValues,
} from 'entities/Article'
import { type SortOrderValues } from 'shared/types'

export type ArticleListViewErrors = 'UNKNOWN_ERROR'

export interface ArticlesListViewState extends EntityState<Article> {
    loading?: boolean
    error?: ArticleListViewErrors
    _initialized: boolean

    // pagination
    page: number
    limit: number
    hasMore: boolean

    // filters
    view: ArticleListViewMode
    order: SortOrderValues
    sort: ArticleSortFieldValues
    search: string
}
