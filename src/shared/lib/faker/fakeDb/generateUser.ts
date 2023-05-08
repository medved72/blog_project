import { faker } from '../fakerInstance'
import { type DatabaseProfile, type DatabaseUser } from './db.dto'
import { type UserRoleDto } from '../../../api/types'

const roles: UserRoleDto[] = ['ADMIN', 'USER', 'MANAGER']

export const generateUser = (profile: DatabaseProfile): DatabaseUser => {
    return {
        id: profile.id,
        username: profile.username,
        password: '123',
        roles: [
            roles[faker.datatype.number({ min: 0, max: roles.length - 1 })],
        ],
        avatar: profile.avatar,
        features: {
            isArticleRatingEnabled: faker.datatype.boolean(),
            isCounterEnabled: faker.datatype.boolean(),
        },
    }
}
