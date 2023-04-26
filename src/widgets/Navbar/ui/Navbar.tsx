import { type FC, memo, useCallback, useState } from 'react'

import { generatePath } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { AvatarDropdown } from '@/features/AvatarDropdown'
import { LoginModal } from '@/features/AuthByUsername'
import { NotificationButton } from '@/features/NotificationButton'

import { getUserAuthData } from '@/entities/User'

import { AppLink } from '@/shared/ui/Link'
import { Button } from '@/shared/ui/Button'
import { HStack } from '@/shared/ui/Stack'
import { ROUTES } from '@/shared/config/routes'
import { Text } from '@/shared/ui/Text'
import { classNames } from '@/shared/lib/classNames/classNames'

import classes from './Navbar.module.scss'

export interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = memo(({ className }) => {
    const { t } = useTranslation()

    const authData = useSelector(getUserAuthData)

    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

    const handleAuthModalOpen = useCallback(() => {
        setIsAuthModalOpen(true)
    }, [setIsAuthModalOpen])

    const handleAuthModalClose = useCallback(() => {
        setIsAuthModalOpen(false)
    }, [setIsAuthModalOpen])

    const handleLoginSuccess = useCallback(() => {
        handleAuthModalClose()
    }, [handleAuthModalClose])

    return (
        <>
            <HStack
                as="header"
                className={classNames(classes.navbar, {}, [className])}
                justify="between"
                fullWidth
            >
                <HStack>
                    {authData && (
                        <>
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
                        </>
                    )}
                </HStack>
                <HStack gap="16">
                    {authData ? (
                        <>
                            <NotificationButton />
                            <AvatarDropdown />
                        </>
                    ) : (
                        <Button
                            theme="clearInverted"
                            onClick={handleAuthModalOpen}
                        >
                            {t('Войти')}
                        </Button>
                    )}
                </HStack>
            </HStack>
            <LoginModal
                isOpen={isAuthModalOpen}
                onClose={handleAuthModalClose}
                onLoginSuccess={handleLoginSuccess}
            />
        </>
    )
})

Navbar.displayName = 'Navbar'
