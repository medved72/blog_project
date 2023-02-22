import { type FC, memo, useCallback, useState } from 'react'

import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/AuthByUsername'
import { Button } from 'shared/ui/Button'
import { classNames } from 'shared/lib/classNames'

import classes from './Navbar.module.scss'

export interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = memo(({ className }) => {
    const { t } = useTranslation()
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

    const handleAuthModalOpen = useCallback(() => {
        setIsAuthModalOpen(true)
    }, [setIsAuthModalOpen])

    const handleAuthModalClose = useCallback(() => {
        setIsAuthModalOpen(false)
    }, [setIsAuthModalOpen])

    return (
        <>
            <div className={classNames(classes.navbar, {}, [className])}>
                <div className={classes.links}>
                    <Button theme="clearInverted" onClick={handleAuthModalOpen}>
                        {t('signIn')}
                    </Button>
                </div>
            </div>
            <LoginModal
                isOpen={isAuthModalOpen}
                onClose={handleAuthModalClose}
            />
        </>
    )
})

Navbar.displayName = 'Navbar'
