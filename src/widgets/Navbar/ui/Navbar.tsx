import { type FC, memo, useCallback, useState } from 'react'

import { classNames } from 'shared/lib/classNames'

import classes from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'
import { Modal } from 'shared/ui/Modal'

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

  return <>
    <div className={classNames(classes.navbar, {}, [className])}>
      <div className={classes.links}>
        <Button theme="clearInverted" onClick={handleAuthModalOpen}>
          {t('signIn')}
        </Button>
      </div>
    </div>
    <Modal isOpen={isAuthModalOpen} onClose={handleAuthModalClose}>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      {/* eslint-disable-next-line i18next/no-literal-string */}
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut autem, cum
      cupiditate expedita ipsum maxime nobis quaerat similique vel veniam?
      Animi fuga ipsa maiores nam praesentium reprehenderit temporibus totam vitae!
    </Modal>
  </>
})

Navbar.displayName = 'Navbar'
