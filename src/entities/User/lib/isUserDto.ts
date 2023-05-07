import { type UserDto } from '@/shared/api/types'

const schema = {
    id: 'string',
    username: 'string',
    avatar: 'string',
    roles: 'array',
    featureFlags: 'object',
} as const

function hasOwnProperty<X extends object, Y extends PropertyKey>(
    obj: X,
    prop: Y
): obj is X & Record<Y, unknown> {
    return prop in obj
}

export const isUserDto = (value: unknown): value is UserDto => {
    return Object.entries(schema).every(([key, type]) => {
        const typedKey = key as keyof typeof schema

        if (value === null || typeof value !== 'object') {
            return false
        }

        if (!hasOwnProperty(value, typedKey)) {
            return false
        }

        switch (type) {
            case 'string':
                return typeof value[typedKey] === 'string'

            case 'object':
                return typeof value === 'object'

            case 'array':
                return Array.isArray(value)

            default:
                return false
        }
    })
}
