import { type CommentDto } from './model/types/comment'
import db from '../../../json-server/db.json'

export type { CommentDto } from './model/types/comment'
export const getCommentsByArticleId = (articleId: string): CommentDto[] => {
    return db.comments
        .filter((comment) => comment.articleId === articleId)
        .map(
            ({ userId, ...restComment }) =>
                ({
                    ...restComment,
                    user: db.users.find((user) => user.id === userId),
                } as CommentDto)
        )
}
