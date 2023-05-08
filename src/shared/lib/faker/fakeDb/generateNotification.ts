import { faker } from '../fakerInstance'
import { type DatabaseNotification, type DatabaseUser } from './db.dto'

interface GenerateNotificationParams {
    userIds: Array<DatabaseUser['id']>
}

const generateHref = (): DatabaseNotification['href'] => {
    const hrefs = [undefined, '/admin']
    return hrefs[faker.datatype.number({ min: 0, max: hrefs.length - 1 })]
}

export const generateNotification = ({
    userIds,
}: GenerateNotificationParams): DatabaseNotification => ({
    id: faker.datatype.uuid(),
    description: faker.lorem.words(5),
    title: faker.lorem.word(),
    userId: userIds[faker.datatype.number({ min: 0, max: userIds.length - 1 })],
    href: generateHref(),
})
