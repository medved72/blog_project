import { capitalize } from '../../capitalize'
import { faker } from '../fakerInstance'
import { type DatabaseArticle, type DatabaseUser } from './db.dto'

export interface GenerateArticleParams {
    userIds: Array<DatabaseUser['id']>
}

const formatDate = (date: Date) => {
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear()

    return `${day}.${month}.${year}`
}

const blocksSchema = {
    1: () => ({
        id: faker.datatype.uuid(),
        type: 'TEXT',
        title: faker.name.jobTitle(),
        paragraphs: faker.datatype.array(5).map(() => faker.lorem.paragraph()),
    }),
    2: () => ({
        id: faker.datatype.uuid(),
        type: 'CODE',
        code: faker.lorem.paragraph(2),
    }),
    3: () => ({
        id: faker.datatype.uuid(),
        type: 'IMAGE',
        src: faker.image.dataUri(640, 480, faker.color.rgb()),
        title: faker.name.jobTitle(),
    }),
}

export const generateArticle = ({
    userIds,
}: GenerateArticleParams): DatabaseArticle => ({
    id: faker.datatype.uuid(),
    title: faker.name.jobTitle(),
    subtitle: faker.name.jobDescriptor(),
    img: faker.image.dataUri(640, 480, faker.color.rgb()),
    views: faker.datatype.number({ min: 10, max: 100 }),
    createdAt: formatDate(faker.datatype.datetime()),
    userId: userIds[faker.datatype.number({ min: 0, max: userIds.length - 1 })],
    type: faker.datatype.array(3).map(() => capitalize(faker.hacker.noun())),
    blocks: faker.datatype.array(5).map(() => {
        const type = faker.datatype.number({
            min: 1,
            max: 3,
        }) as keyof typeof blocksSchema
        const generator = blocksSchema[type]
        return generator()
    }),
})
