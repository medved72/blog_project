import './styles/index.scss'
import { type FC } from 'react'

import { AppNavbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

import { useTheme } from 'shared/config/theme'
import { classNames } from 'shared/lib/classNames'

import { withProviders } from './providers'
import { AppRouter } from './router'

import classes from './App.module.scss'

export const App: FC = withProviders(() => {
    const { theme } = useTheme()

    return (
        <div className={classNames(classes.app, {}, [`${theme}Theme`])}>
            <AppNavbar />
            <div className={classes.pageContent}>
                <Sidebar />
                <div className={classes.pageWrapper}>
                    <AppRouter />
                </div>
            </div>
        </div>
    )
})
