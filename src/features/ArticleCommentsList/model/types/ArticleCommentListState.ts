import { type CommentDto } from 'entities/Comment'
import { type EntityState } from '@reduxjs/toolkit'

export type ArticleCommentListError = 'UNKNOWN_ERROR'

export interface ArticleCommentListState extends EntityState<CommentDto> {
    isLoading?: boolean
    error?: ArticleCommentListError
}
