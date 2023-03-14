import { type Comment } from 'entities/Comment'
import { type EntityState } from '@reduxjs/toolkit'

export type ArticleCommentListError = 'UNKNOWN_ERROR'

export interface ArticleCommentListState extends EntityState<Comment> {
    isLoading?: boolean
    error?: ArticleCommentListError
}
