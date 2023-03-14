import { type Article } from './article'

export type ArticleDetailsStateError = 'UNKNOWN_ERROR'

export interface ArticleDetailsState {
    isLoading: boolean
    error?: ArticleDetailsStateError
    data?: Article
}
