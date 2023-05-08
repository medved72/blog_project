import {
    type DatabaseArticle,
    type DatabaseArticleComment,
    type DatabaseUser,
} from './db.dto'
import { faker } from '../fakerInstance'

export interface GenerateCommentParams {
    userIds: Array<DatabaseUser['id']>
    articleIds: Array<DatabaseArticle['id']>
}

export const generateComment = ({
    articleIds,
    userIds,
}: GenerateCommentParams): DatabaseArticleComment => {
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
