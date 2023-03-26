import type db from '../../../../json-server/db.json'
import { faker } from '@faker-js/faker'

export type GenerateCommentReturn = (typeof db.comments)[number]
export interface GenerateCommentParams {
    userIds: Array<(typeof db.users)[number]['id']>
    articleIds: Array<(typeof db.articles)[number]['id']>
}

export const generateComment = ({
    articleIds,
    userIds,
}: GenerateCommentParams): GenerateCommentReturn => {
    return {
        id: faker.datatype.uuid(),
        userId: userIds[
            faker.datatype.number({ min: 0, max: userIds.length - 1 })
        ],
        articleId:
            articleIds[
                faker.datatype.number({ min: 0, max: articleIds.length - 1 })
            ],
        text: faker.lorem.text(),
    }
}
