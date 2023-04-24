import { type Profile } from './model/types/profile'
import db from '../../../json-server/db.json'

export type { Profile } from './model/types/profile'
export const profiles: Profile[] = db.profile as Profile[]
