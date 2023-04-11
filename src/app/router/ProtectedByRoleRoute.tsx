import { type FC, memo, type PropsWithChildren } from 'react'
import { useSelector } from 'react-redux'
import { generatePath, Navigate, useLocation } from 'react-router-dom'
import { ROUTES } from '../../shared/config/routes'
import { type AppState } from '../providers/StoreProvider/types'

interface ProtectedByRoleRouteProps {
    canViewSelector: (state: AppState) => boolean
}

export const ProtectedByRoleRoute: FC<
    PropsWithChildren<ProtectedByRoleRouteProps>
> = memo(({ children, canViewSelector }) => {
    const canView = useSelector(canViewSelector)
    const location = useLocation()

    if (!canView) {
        return (
            <Navigate
                to={generatePath(ROUTES.FORBIDDEN)}
                state={{ from: location }}
                replace
            />
        )
    }

    return <>{children}</>
})
ProtectedByRoleRoute.displayName = 'ProtectedByRoleRoute'
