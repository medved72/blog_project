import { faker } from '../fakerInstance'
import { type DatabaseProfile, type DatabaseUser } from './db.dto'
import { type UserRoleDto } from '../../../api/types'

const themes = ['light', 'dark', 'orange']

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
        jsonSettings: {
            theme: themes[
                faker.datatype.number({ min: 0, max: themes.length - 1 })
            ],
            settingsPageHasBeenOpen: faker.datatype.boolean(),
            isFirstVisit: faker.datatype.boolean(),
            isArticlesPageWasOpened: faker.datatype.boolean(),
        },
        features: {
            isArticleRatingEnabled: faker.datatype.boolean(),
            isCounterEnabled: faker.datatype.boolean(),
        },
    }
}
