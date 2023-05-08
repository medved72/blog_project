import { fakeDb } from '@/shared/lib/faker'
import { type UserDto } from '@/shared/api/types'

export { actions, reducer } from './model/slice'

export const usersMock: UserDto[] = fakeDb.users as UserDto[]
