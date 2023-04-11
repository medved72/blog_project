import { type FC, memo, useCallback, useState } from 'react'

import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/AuthByUsername'
import { Button } from 'shared/ui/Button'
import { classNames } from 'shared/lib/classNames/classNames'

import classes from './Navbar.module.scss'
import { useSelector } from 'react-redux'
import {
    actions as userActions,
    getCanViewAdminPanel,
    getUserAuthData,
} from 'entities/User'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { Text } from 'shared/ui/Text'
import { AppLink } from 'shared/ui/Link'
import { generatePath } from 'react-router-dom'
import { ROUTES } from 'shared/config/routes'
import { Dropdown } from 'shared/ui/Dropdown'
import { Avatar } from 'shared/ui/Avatar'

export interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = memo(({ className }) => {
    const { t } = useTranslation()

    const isCanViewAdminPanel = useSelector(getCanViewAdminPanel)

    const dispatch = useAppDispatch()

    const authData = useSelector(getUserAuthData)

    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

    const handleAuthModalOpen = useCallback(() => {
        setIsAuthModalOpen(true)
    }, [setIsAuthModalOpen])

    const handleAuthModalClose = useCallback(() => {
        setIsAuthModalOpen(false)
    }, [setIsAuthModalOpen])

    const handleLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    const handleLoginSuccess = useCallback(() => {
        handleAuthModalClose()
    }, [handleAuthModalClose])

    return (
        <>
            {authData ? (
                <header className={classNames(classes.navbar, {}, [className])}>
                    <Text
                        className={classes.appName}
                        theme="inverted"
                        title={t('navbar.app.appname.title')}
                    />
                    <AppLink
                        theme="invertedSecondary"
                        to={generatePath(ROUTES.ARTICLE_CREATE)}
                    >
                        {t('navbar.link.create.text')}
                    </AppLink>
                    <div className={classes.links}>
                        <Dropdown
                            direction="bottomLeft"
                            trigger={<Avatar size={30} src={authData.avatar} />}
                            items={[
                                ...(isCanViewAdminPanel
                                    ? [
                                          {
                                              content: t(
                                                  'navbar.item.adminPanel'
                                              ),
                                              href: generatePath(
                                                  ROUTES.ADMIN_PANEL,
                                                  {}
                                              ),
                                          },
                                      ]
                                    : []),
                                {
                                    content: t('navbar.item.profile'),
                                    href: generatePath(ROUTES.PROFILE, {
                                        profileId: authData.id,
                                    }),
                                },
                                {
                                    content: t('Выйти'),
                                    onClick: handleLogout,
                                },
                            ]}
                        />
                    </div>
                </header>
            ) : (
                <header className={classNames(classes.navbar, {}, [className])}>
                    <div className={classes.links}>
                        <Button
                            theme="clearInverted"
                            onClick={handleAuthModalOpen}
                        >
                            {t('Войти')}
                        </Button>
                    </div>
                </header>
            )}
            <LoginModal
                isOpen={isAuthModalOpen}
                onClose={handleAuthModalClose}
                onLoginSuccess={handleLoginSuccess}
            />
        </>
    )
})

Navbar.displayName = 'Navbar'
