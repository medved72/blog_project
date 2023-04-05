import {
    type ButtonHTMLAttributes,
    forwardRef,
    memo,
    type PropsWithChildren,
    useMemo,
} from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import classes from './Button.module.scss'

const BUTTON_THEME = {
    none: '',
    clear: classes.clear,
    clearInverted: classes.clearInverted,
    outline: classes.outline,
    background: classes.background,
    backgroundInverted: classes.backgroundInverted,
    outlineRed: classes.outlineRed,
} as const
export type ButtonTheme = keyof typeof BUTTON_THEME

const BUTTON_SIZE = {
    m: classes.sizeM,
    l: classes.sizeL,
    xl: classes.sizeXL,
} as const
export type ButtonSize = keyof typeof BUTTON_SIZE

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    size?: ButtonSize
    square?: boolean
}

export const Button = memo(
    forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(
        (
            {
                className,
                theme = 'outline',
                size = 'm',
                children,
                square,
                disabled,
                ...restProps
            },
            ref
        ) => {
            const rootClassname = useMemo(() => {
                return classNames(
                    classes.button,
                    {
                        [classes.square]: square,
                        [classes.disabled]: disabled,
                    },
                    [className, BUTTON_THEME[theme], BUTTON_SIZE[size]]
                )
            }, [className, disabled, size, square, theme])

            return (
                <button
                    ref={ref}
                    {...restProps}
                    className={rootClassname}
                    disabled={disabled}
                >
                    {children}
                </button>
            )
        }
    )
)
Button.displayName = 'Button'
