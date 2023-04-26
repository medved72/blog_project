import { type FC, memo, Suspense, useMemo } from 'react'

import { type RouteObject, useRoutes } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { AboutPage } from '@/pages/AboutPage'
import { AdminPanelPage } from '@/pages/AdminPanelPage'
import { ArticleCreatePage } from '@/pages/ArticleCreatePage'
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage'
import { ArticleEditPage } from '@/pages/ArticleEditPage'
import { ArticlesPage } from '@/pages/ArticlesPage'
import { ForbiddenPage } from '@/pages/ForbiddenPage'
import { MainPage } from '@/pages/MainPage'
import { NotFound } from '@/pages/NotFound'
import { ProfilePage } from '@/pages/ProfilePage'
import { SchemaGenerator } from '@/pages/SchemaGenerator'

import { PageLoader } from '@/widgets/PageLoader'

import { getCanViewAdminPanel, getUserInitialized } from '@/entities/User'

import { ROUTES } from '@/shared/config/routes'

import { ProtectedAuthRoute } from './ProtectedAuthRoute'
import { ProtectedByRoleRoute } from './ProtectedByRoleRoute'

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
            {
                path: ROUTES.ADMIN_PANEL,
                element: (
                    <ProtectedAuthRoute>
                        <ProtectedByRoleRoute
                            canViewSelector={getCanViewAdminPanel}
                        >
                            <AdminPanelPage />
                        </ProtectedByRoleRoute>
                    </ProtectedAuthRoute>
                ),
            },
            {
                path: ROUTES.FORBIDDEN,
                element: (
                    <ProtectedAuthRoute>
                        <ForbiddenPage />
                    </ProtectedAuthRoute>
                ),
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
