import { type FC, memo, type PropsWithChildren, Suspense, useMemo } from 'react'
import {
    useRoutes,
    type RouteObject,
    Navigate,
    generatePath,
    useLocation,
} from 'react-router-dom'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { NotFound } from 'pages/NotFound'
import { ProfilePage } from 'pages/ProfilePage'
import { PageLoader } from 'widgets/PageLoader'
import { ROUTES } from 'shared/config/routes'
import { useSelector } from 'react-redux'
import { ArticlesPage } from 'pages/ArticlesPage'
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage'
import { getUserAuthData, getUserInitialized } from 'entities/User'
import { SchemaGenerator } from 'pages/SchemaGenerator'
import { ArticleEditPage } from 'pages/ArticleEditPage'
import { ArticleCreatePage } from 'pages/ArticleCreatePage'

const ProtectedAuthRoute: FC<PropsWithChildren> = memo(({ children }) => {
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
})
ProtectedAuthRoute.displayName = 'ProtectedAuthRoute'

export const AppRouter: FC = memo(() => {
    const userInitialized = useSelector(getUserInitialized)

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
            {
                path: ROUTES.ARTICLES,
                element: (
                    <ProtectedAuthRoute>
                        <ArticlesPage />
                    </ProtectedAuthRoute>
                ),
            },
            {
                path: ROUTES.ARTICLE_DETAILS,
                element: (
                    <ProtectedAuthRoute>
                        <ArticleDetailsPage />
                    </ProtectedAuthRoute>
                ),
            },
            {
                path: ROUTES.ARTICLE_CREATE,
                element: <ArticleCreatePage />,
            },
            {
                path: ROUTES.ARTICLE_EDIT,
                element: <ArticleEditPage />,
            },
            { path: 'schema-generator', element: <SchemaGenerator /> },
            { path: ROUTES.NOT_FOUND, element: <NotFound /> },
        ]
    }, [])

    const routes = useRoutes(routesConfig)

    return (
        <Suspense fallback={<PageLoader />}>
            {userInitialized && routes}
        </Suspense>
    )
})

AppRouter.displayName = 'AppRouter'
