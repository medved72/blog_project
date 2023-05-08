import { fakeDb } from '@/shared/lib/faker'
import { type ArticleDto } from '@/shared/api/types'

export type { Article, ArticleType } from './model/types/article'

export const articlesMock: ArticleDto[] = fakeDb.articles.map((article) => {
    return {
        ...article,
        user: fakeDb.users.find((user) => article.userId === user.id)!,
    } as ArticleDto
})
