import { type FC, memo } from 'react'

import { classNames } from 'shared/lib/classNames'

import classes from './Navbar.module.scss'

export interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = memo(({ className }) => {
  return <div className={classNames(classes.navbar, {}, [className])}>
    <div className={classes.links}>

    </div>
  </div>
})

Navbar.displayName = 'Navbar'
