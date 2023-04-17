import { faker } from '@faker-js/faker'
import type db from '../../../../json-server/db.json'

interface GenerateNotificationParams {
    userIds: Array<(typeof db.users)[number]['id']>
}

interface GenerateNotificationReturn {
    id: string
    title: string
    description: string
    userId: string
    href?: string
}

const generateHref = (): GenerateNotificationReturn['href'] => {
    const hrefs = [undefined, '/admin']
    return hrefs[faker.datatype.number({ min: 0, max: hrefs.length - 1 })]
}

export const generateNotification = ({
    userIds,
}: GenerateNotificationParams): GenerateNotificationReturn => ({
    id: faker.datatype.uuid(),
    description: faker.lorem.words(5),
    title: faker.lorem.word(),
    userId: userIds[faker.datatype.number({ min: 0, max: userIds.length - 1 })],
    href: generateHref(),
})
