import { type FC, memo, type PropsWithChildren } from 'react'

import { Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { getUserAuthData } from '@/entities/User'

import { getMainRoute } from '@/shared/config/routes'

export const ProtectedAuthRoute: FC<PropsWithChildren> = memo(
    ({ children }) => {
        const authData = useSelector(getUserAuthData)
        const location = useLocation()

        if (!authData) {
            return (
                <Navigate
                    to={getMainRoute()}
                    state={{ from: location }}
                    replace
                />
            )
        }

        return <>{children}</>
    }
)
ProtectedAuthRoute.displayName = 'ProtectedAuthRoute'
