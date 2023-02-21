import { type FC, memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { generatePath } from 'react-router-dom'

import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { LanguageSwitcher } from 'features/LanguageSwitcher'
import { Button } from 'shared/ui/Button'
import { AppLink } from 'shared/ui/Link'

import { ROUTES } from 'shared/config/routes'
import { classNames } from 'shared/lib/classNames'

import MainIcon from 'shared/assets/icons/main-20-20.svg'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'

import classes from './Sidebar.module.scss'

export interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
    const [collapsed, setCollapsed] = useState(false)
    const { t } = useTranslation()

    const toggle = useCallback(() => {
        setCollapsed((prev) => !prev)
    }, [])

    return (
        <div
            data-testid="sidebar"
            className={classNames(
                classes.sidebar,
                { [classes.collapsed]: collapsed },
                [className]
            )}
        >
            <Button
                data-testid="sidebar-toggle"
                className={classes.collapsedButton}
                onClick={toggle}
                theme="backgroundInverted"
                size="l"
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={classes.items}>
                <AppLink
                    className={classes.link}
                    theme="invertedPrimary"
                    to={generatePath(ROUTES.MAIN, {})}
                >
                    <MainIcon className={classes.icon} />
                    <span>{t('linkToMain')}</span>
                </AppLink>
                <AppLink
                    className={classes.link}
                    theme="invertedPrimary"
                    to={generatePath(ROUTES.ABOUT, {})}
                >
                    <AboutIcon className={classes.icon} />
                    <span>{t('linkToAboutUs')}</span>
                </AppLink>
            </div>
            <div className={classes.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher short={collapsed} />
            </div>
        </div>
    )
})
Sidebar.displayName = 'Sidebar'
