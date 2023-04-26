import db from '../../../json-server/db.json'
import { type Profile } from './model/types/profile'

export type { Profile } from './model/types/profile'
export const profiles: Profile[] = db.profile as Profile[]
