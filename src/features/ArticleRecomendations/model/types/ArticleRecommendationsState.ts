import { type EntityState } from '@reduxjs/toolkit'
import { type Article } from 'entities/Article'

export type ArticleRecommendationsError = 'UNKNOWN_ERROR'

export interface ArticleRecommendationsState extends EntityState<Article> {
    isLoading?: boolean
    error?: ArticleRecommendationsError
}
