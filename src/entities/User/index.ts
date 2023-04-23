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
} from './model/selectors'
