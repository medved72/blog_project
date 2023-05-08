import { fakeDb } from '@/shared/lib/faker'
import { type ProfileDto } from '@/shared/api/types'

export type { ProfileDto } from '@/shared/api/types'
export const profilesMock: ProfileDto[] = fakeDb.profile as ProfileDto[]
