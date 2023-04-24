import { type FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppNavbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'
import { PageWrapper } from '@/widgets/PageWrapper'
import { actions as userActions } from '@/entities/User'
import { useTheme } from '@/shared/config/theme'
import { classNames } from '@/shared/lib/classNames/classNames'
import { withProviders } from './providers'
import { AppRouter } from './router'
import classes from './App.module.scss'
import './styles/index.scss'

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
