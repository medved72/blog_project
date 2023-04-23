import { type FC, memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { generatePath } from 'react-router-dom'
import { LoginModal } from '@/features/AuthByUsername'
import { NotificationButton } from '@/features/NotificationButton'
import { AvatarDropdown } from '@/features/AvatarDropdown'
import { getUserAuthData } from '@/entities/User'
import { Button } from '@/shared/ui/Button'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text } from '@/shared/ui/Text'
import { AppLink } from '@/shared/ui/Link'
import { ROUTES } from '@/shared/config/routes'
import { HStack } from '@/shared/ui/Stack'
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
