import { type FC, memo, type PropsWithChildren } from 'react'
import { useSelector } from 'react-redux'
import { generatePath, Navigate, useLocation } from 'react-router-dom'
import { getUserAuthData } from '../../entities/User'
import { ROUTES } from '../../shared/config/routes'

export const ProtectedAuthRoute: FC<PropsWithChildren> = memo(
    ({ children }) => {
        const authData = useSelector(getUserAuthData)
        const location = useLocation()

        if (!authData) {
            return (
                <Navigate
                    to={generatePath(ROUTES.MAIN)}
                    state={{ from: location }}
                    replace
                />
            )
        }

        return <>{children}</>
    }
)
ProtectedAuthRoute.displayName = 'ProtectedAuthRoute'
