import { type ButtonHTMLAttributes, type FC, memo, type PropsWithChildren, useMemo } from 'react'
import { classNames } from 'shared/lib/classNames'

import classes from './Button.module.scss'

const BUTTON_THEME = {
  none: '',
  clear: classes.clear,
  clearInverted: classes.clearInverted,
  outline: classes.outline,
  background: classes.background,
  backgroundInverted: classes.backgroundInverted
} as const
export type ButtonTheme = keyof typeof BUTTON_THEME

const BUTTON_SIZE = {
  m: classes.sizeM,
  l: classes.sizeL,
  xl: classes.sizeXL
} as const
export type ButtonSize = keyof typeof BUTTON_SIZE

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  size?: ButtonSize
  square?: boolean
}

export const Button: FC<PropsWithChildren<ButtonProps>> = memo(({
  className,
  theme = 'none',
  size = 'm',
  children,
  square,
  ...restProps
}) => {
  const rootClassname = useMemo(() => {
    return classNames(classes.button, {
      [classes.square]: square
    }, [className, BUTTON_THEME[theme], BUTTON_SIZE[size]])
  }, [className, size, square, theme])

  return <button
    {...restProps}
    className={rootClassname}
  >
    {children}
  </button>
})
Button.displayName = 'Button'
