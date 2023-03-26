import type db from '../../../../json-server/db.json'
import { generateProfile } from './generateProfile'
import { generateArticle } from './generateArticle'
import { generateUser } from './generateUser'
import { generateComment } from './generateComment'

export type GenerateDbReturn = typeof db

export const generateDb = (): GenerateDbReturn => {
    const profiles = new Array(3).fill(null).map(generateProfile)
    const users = profiles.map(generateUser)
    const userIds = profiles.map(({ id }) => id)
    const articles = new Array(3)
        .fill(null)
        .map(() => generateArticle({ userIds }))
    const articleIds = articles.map(({ id }) => id)
    const comments = new Array(20)
        .fill(null)
        .map(() => generateComment({ userIds, articleIds }))

    return {
        articles,
        profile: profiles,
        users,
        comments,
    }
}
