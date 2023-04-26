import db from '../../../json-server/db.json'
import { type Article } from './model'

export type { Article, ArticleType } from './model/types/article'

export const articles = db.articles.map(
    (article) =>
        ({
            ...article,
            user: db.users.find((user) => user.id === article.userId)!,
        } as Article)
)
