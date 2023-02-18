import { type FC, memo, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'

import { ROUTES } from 'shared/config/routes'
import { NotFound } from 'pages/NotFound'
import { PageLoader } from 'widgets/PageLoader'

export const AppRouter: FC = memo(() => {
  const routes = useRoutes([
    { path: ROUTES.MAIN, element: <MainPage /> },
    { path: ROUTES.ABOUT, element: <AboutPage /> },
    { path: ROUTES.NOT_FOUND, element: <NotFound /> }
  ])

  return <Suspense fallback={<PageLoader />}>
    {routes}
  </Suspense>
})

AppRouter.displayName = 'AppRouter'
