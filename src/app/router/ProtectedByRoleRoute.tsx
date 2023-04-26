import { type FC, memo, type PropsWithChildren } from 'react'

import { generatePath, Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { ROUTES } from '@/shared/config/routes'

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
