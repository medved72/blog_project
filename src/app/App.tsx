import { type FC, useEffect } from 'react'

import { useDispatch } from 'react-redux'

import { AppNavbar } from '@/widgets/Navbar'
import { PageWrapper } from '@/widgets/PageWrapper'
import { Sidebar } from '@/widgets/Sidebar'

import { actions as userActions } from '@/entities/User'

import { classNames } from '@/shared/lib/classNames/classNames'
import { useTheme } from '@/shared/config/theme'

import { AppRouter } from './router'
import { withProviders } from './providers'

import './styles/index.scss'
import classes from './App.module.scss'

export const App: FC = withProviders(() => {
    const { theme } = useTheme()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

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
