import { actions as sliceActions } from './model/slice/profileSlice'
import { fetchProfileData } from './model/services/fetchProfileData'
import { updateProfileData } from './model/services/updateProfileData'

export { ProfileCard } from './ui/ProfileCard'
export * as selectors from './model/selectors'
export type { Profile, ProfileState } from './model/types/profile'
export { reducer } from './model/slice/profileSlice'

export const actions = {
    ...sliceActions,
    fetchProfileData,
    updateProfileData,
}
