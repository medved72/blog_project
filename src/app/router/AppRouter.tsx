import { type FC, memo, type PropsWithChildren, Suspense, useMemo } from 'react'
import { useRoutes, type RouteObject } from 'react-router-dom'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { NotFound } from 'pages/NotFound'
import { ProfilePage } from 'pages/ProfilePage'
import { PageLoader } from 'widgets/PageLoader'
import { ROUTES } from 'shared/config/routes'
import { useSelector } from 'react-redux'
import { selectors } from 'entities/User'

const ProtectedAuthRoute: FC<PropsWithChildren> = memo(({ children }) => {
    const authData = useSelector(selectors.getUserAuthData)

    if (!authData) {
        return <NotFound />
    }

    return <>{children}</>
})
ProtectedAuthRoute.displayName = 'ProtectedAuthRoute'

export const AppRouter: FC = memo(() => {
    const routesConfig: RouteObject[] = useMemo(() => {
        return [
            { path: ROUTES.MAIN, element: <MainPage /> },
            { path: ROUTES.ABOUT, element: <AboutPage /> },
            {
                path: ROUTES.PROFILE,
                element: (
                    <ProtectedAuthRoute>
                        <ProfilePage />
                    </ProtectedAuthRoute>
                ),
            },
            { path: ROUTES.NOT_FOUND, element: <NotFound /> },
        ]
    }, [])

    const routes = useRoutes(routesConfig)

    return <Suspense fallback={<PageLoader />}>{routes}</Suspense>
})

AppRouter.displayName = 'AppRouter'
