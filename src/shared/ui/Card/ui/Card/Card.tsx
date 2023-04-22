import {
    type FC,
    type HTMLAttributes,
    memo,
    type PropsWithChildren,
} from 'react'
import { classNames } from '@/shared/lib/classNames'
import classes from './Card.module.scss'
import { type ValueOf } from '@/shared/types'
export const CardTheme = {
    normal: 'normal',
    outlined: 'outlined',
} as const

export type CardThemeValue = ValueOf<typeof CardTheme>

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    theme?: CardThemeValue
    fullWidth?: boolean
}

export const Card: FC<PropsWithChildren<CardProps>> = memo((props) => {
    const {
        className,
        children,
        theme = 'normal',
        fullWidth,
        ...restProps
    } = props

    return (
        <div
            {...restProps}
            className={classNames(
                classes.card,
                {
                    [classes.fullWidth]: fullWidth,
                },
                [className, classes[theme]]
            )}
        >
            {children}
        </div>
    )
})
Card.displayName = 'Card'
