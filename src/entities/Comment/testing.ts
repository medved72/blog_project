import { fakeDb } from '@/shared/lib/faker'

import { type CommentDto } from './model/types/comment'

export type { CommentDto } from './model/types/comment'

export const getCommentsByArticleId = (articleId: string): CommentDto[] => {
    return fakeDb.comments
        .filter((comment) => comment.articleId === articleId)
        .map(
            (comment) =>
                ({
                    ...comment,
                    user: fakeDb.users.find(
                        (user) => user.id === comment.userId
                    ),
                } as CommentDto)
        )
}
