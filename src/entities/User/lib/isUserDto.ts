import { hasProp } from '@/shared/lib/hasProp'
import { type UserDto } from '@/shared/api/types'

const schema = {
    id: 'string',
    username: 'string',
    avatar: 'string',
    roles: 'array',
    featureFlags: 'object',
} as const

export const isUserDto = (value: unknown): value is UserDto => {
    return Object.entries(schema).every(([key, type]) => {
        if (value === null || typeof value !== 'object') {
            return false
        }

        if (!hasProp(value, key)) {
            return false
        }

        switch (type) {
            case 'string':
                return typeof value[key] === 'string'

            case 'object':
                return typeof value === 'object'

            case 'array':
                return Array.isArray(value)

            default:
                return false
        }
    })
}
