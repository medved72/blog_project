import { type FC, useEffect } from 'react'

import { useSelector } from 'react-redux'

import { AppNavbar } from '@/widgets/Navbar'
import { PageLoader } from '@/widgets/PageLoader'
import { PageWrapper } from '@/widgets/PageWrapper'
import { Sidebar } from '@/widgets/Sidebar'

import { getUserInitialized, initAuthData } from '@/entities/User'

import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { useTheme } from '@/shared/config/theme'

import { AppRouter } from './router'
import { withProviders } from './providers'

import './styles/index.scss'
import classes from './App.module.scss'

export const App: FC = withProviders(() => {
    const { theme } = useTheme()

    const userInitialized = useSelector(getUserInitialized)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(initAuthData())
    }, [dispatch])

    if (!userInitialized) {
        return (
            <PageLoader
                className={classNames(classes.app, {}, [`${theme}Theme`])}
            />
        )
    }

    return (
        <div className={classNames(classes.app, {}, [`${theme}Theme`])}>
            <AppNavbar />
            <div className={classes.pageContent}>
                <Sidebar />
                <PageWrapper>
                    <AppRouter />
                </PageWrapper>
            </div>
        </div>
    )
})
