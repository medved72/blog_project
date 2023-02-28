import { type FC, memo, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { NotFound } from 'pages/NotFound'
import { ProfilePage } from 'pages/ProfilePage'
import { PageLoader } from 'widgets/PageLoader'
import { ROUTES } from 'shared/config/routes'

export const AppRouter: FC = memo(() => {
    const routes = useRoutes([
        { path: ROUTES.MAIN, element: <MainPage /> },
        { path: ROUTES.ABOUT, element: <AboutPage /> },
        { path: ROUTES.PROFILE, element: <ProfilePage /> },
        { path: ROUTES.NOT_FOUND, element: <NotFound /> },
    ])

    return <Suspense fallback={<PageLoader />}>{routes}</Suspense>
})

AppRouter.displayName = 'AppRouter'
