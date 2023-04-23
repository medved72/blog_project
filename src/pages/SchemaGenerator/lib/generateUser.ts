import { faker } from '@faker-js/faker'
import { type UserRoleDto } from '@/shared/api/types'
import type db from '../../../../json-server/db.json'
import { type GenerateProfileReturn } from './generateProfile'

export type GenerateUserReturn = (typeof db.users)[number]

const roles: UserRoleDto[] = ['ADMIN', 'USER', 'MANAGER']

export const generateUser = (
    profile: GenerateProfileReturn
): GenerateUserReturn => {
    return {
        id: profile.id,
        username: profile.username,
        password: '123',
        roles: [
            roles[faker.datatype.number({ min: 0, max: roles.length - 1 })],
        ],
        avatar: profile.avatar,
    }
}
