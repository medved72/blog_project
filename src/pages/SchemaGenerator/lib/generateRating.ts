import { faker } from '@faker-js/faker'

interface GenerateRatingParams {
    userId: string
    articleId: string
}

interface GenerateRatingReturn {
    id: string
    rate: number
    feedback: string
    userId: string
    articleId: string
}

export const generateRating = ({
    userId,
    articleId,
}: GenerateRatingParams): GenerateRatingReturn => {
    return {
        articleId,
        userId,
        rate: faker.datatype.number({ min: 0, max: 5 }),
        feedback: faker.lorem.word(5),
        id: faker.datatype.uuid(),
    }
}
