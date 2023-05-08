import {
    type DatabaseArticle,
    type DatabaseArticleRating,
    type DatabaseUser,
} from './db.dto'
import { faker } from '../fakerInstance'

interface GenerateRatingParams {
    userId: DatabaseUser['id']
    articleId: DatabaseArticle['id']
}

export const generateRating = ({
    userId,
    articleId,
}: GenerateRatingParams): DatabaseArticleRating => {
    return {
        articleId,
        userId,
        rate: faker.datatype.number({ min: 0, max: 5 }),
        feedback: faker.lorem.word(5),
        id: faker.datatype.uuid(),
    }
}
