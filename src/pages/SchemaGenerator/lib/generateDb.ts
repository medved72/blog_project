import type db from '../../../../json-server/db.json'
import { generateArticle } from './generateArticle'
import { generateComment } from './generateComment'
import { generateNotification } from './generateNotification'
import { generateProfile } from './generateProfile'
import { generateRating } from './generateRating'
import { generateUser } from './generateUser'

export type GenerateDbReturn = typeof db

export const generateDb = (): GenerateDbReturn => {
    const profiles = new Array(3).fill(null).map(generateProfile)
    profiles[0].username = 'admin'
    profiles[1].username = 'user'
    profiles[2].username = 'manager'

    const users = profiles.map(generateUser)
    users[0].roles = ['ADMIN']
    users[1].roles = ['USER']
    users[2].roles = ['MANAGER']

    const userIds = profiles.map(({ id }) => id)
    const articles = new Array(100)
        .fill(null)
        .map(() => generateArticle({ userIds }))
    const articleIds = articles.map(({ id }) => id)
    const comments = new Array(articles.length * 2)
        .fill(null)
        .map(() => generateComment({ userIds, articleIds }))
    const notifications = new Array(5)
        .fill(null)
        .map(() => generateNotification({ userIds }))

    const articleRatings = userIds
        .flatMap((userId) => {
            return articleIds.flatMap((articleId) => {
                return generateRating({ userId, articleId })
            })
        })
        .filter(({ rate }) => rate !== 0)

    return {
        articles,
        profile: profiles,
        users,
        comments,
        notifications,
        'article-ratings': articleRatings,
    }
}
