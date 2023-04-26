import { type FC, memo, type PropsWithChildren } from 'react'

import {
    Link as RouterLink,
    type LinkProps as RouterLinkProps,
} from 'react-router-dom'

import { classNames } from '../../../lib/classNames/classNames'

import classes from './Link.module.scss'

export const LINK_THEME = {
    primary: classes.primary,
    secondary: classes.secondary,
    invertedPrimary: classes.invertedPrimary,
    invertedSecondary: classes.invertedSecondary,
}

export interface LinkProps extends RouterLinkProps {
    className?: string
    theme?: keyof typeof LINK_THEME
}

export const Link: FC<PropsWithChildren<LinkProps>> = memo((props) => {
    const { className, children, theme = 'primary', ...restProps } = props

    return (
        <RouterLink
            {...restProps}
            className={classNames(classes.link, {}, [
                className,
                LINK_THEME[theme],
            ])}
        >
            {children}
        </RouterLink>
    )
})
Link.displayName = 'Link'
