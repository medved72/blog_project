export { actions, reducer } from './model/slice'
export type { UserState } from './model/types/user'
export {
    getUserAuthData,
    getUserInitialized,
    getUserIsUser,
    getUserIsManager,
    getUserIsAdmin,
    getUserRoles,
    getCanViewAdminPanel,
    useUserJsonSettings,
} from './model/selectors'
export { saveJsonSettings } from './model/services/saveJsonSettings'
export { initAuthData } from './model/services/initAuthData'
