import { type EntityState } from '@reduxjs/toolkit'
import { type Article, type ArticleListViewMode } from 'entities/Article'

export type ArticleListViewErrors = 'UNKNOWN_ERROR'

export interface ArticlesListViewState extends EntityState<Article> {
    loading?: boolean
    error?: ArticleListViewErrors
    view: ArticleListViewMode
}
