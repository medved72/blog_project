import { type FC, memo, useCallback, useState } from 'react'

import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/AuthByUsername'
import { Button } from 'shared/ui/Button'
import { classNames } from 'shared/lib/classNames'

import classes from './Navbar.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import {
    selectors as userSelectors,
    actions as userActions,
} from 'entities/User'

export interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = memo(({ className }) => {
    const { t } = useTranslation()

    const dispatch = useDispatch()

    const authData = useSelector(userSelectors.getUserAuthData)

    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

    const [isLoggedIn, setIsLoggedIn] = useState(!!authData)

    const handleAuthModalOpen = useCallback(() => {
        setIsAuthModalOpen(true)
    }, [setIsAuthModalOpen])

    const handleAuthModalClose = useCallback(() => {
        setIsAuthModalOpen(false)
    }, [setIsAuthModalOpen])

    const handleLogout = useCallback(() => {
        dispatch(userActions.logout())
        setIsLoggedIn(false)
    }, [dispatch])

    const handleLoginSuccess = useCallback(() => {
        setIsLoggedIn(true)
        setIsAuthModalOpen(false)
    }, [])

    return (
        <>
            {isLoggedIn ? (
                <div className={classNames(classes.navbar, {}, [className])}>
                    <div className={classes.links}>
                        <Button theme="clearInverted" onClick={handleLogout}>
                            {t('logout')}
                        </Button>
                    </div>
                </div>
            ) : (
                <div className={classNames(classes.navbar, {}, [className])}>
                    <div className={classes.links}>
                        <Button
                            theme="clearInverted"
                            onClick={handleAuthModalOpen}
                        >
                            {t('signIn')}
                        </Button>
                    </div>
                </div>
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
