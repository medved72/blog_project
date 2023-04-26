import { type EntityState } from '@reduxjs/toolkit'

import { type CommentDto } from '@/entities/Comment'

export type ArticleCommentListError = 'UNKNOWN_ERROR'

export interface ArticleCommentListState extends EntityState<CommentDto> {
    isLoading?: boolean
    error?: ArticleCommentListError
}
