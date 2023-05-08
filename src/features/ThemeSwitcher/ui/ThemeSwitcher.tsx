import { type FC, memo, useCallback } from 'react'

import { saveJsonSettings } from '@/entities/User'

import DarkIcon from '@/shared/assets/icons/theme-dark.svg'
import LightIcon from '@/shared/assets/icons/theme-light.svg'
import { Button } from '@/shared/ui/Button'
import { THEME, useTheme } from '@/shared/config/theme'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'

export interface SwitchThemeProps {
    className?: string
}

export const ThemeSwitcher: FC<SwitchThemeProps> = memo(({ className }) => {
    const { theme, toggleTheme } = useTheme()

    const dispatch = useAppDispatch()

    const handleToggleClick = useCallback(() => {
        toggleTheme((newTheme) => {
            dispatch(saveJsonSettings({ theme: newTheme }))
        })
    }, [dispatch, toggleTheme])

    return (
        <Button
            className={classNames('', {}, [className])}
            theme="clear"
            onClick={handleToggleClick}
        >
            {theme === THEME.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    )
})
ThemeSwitcher.displayName = 'ThemeSwitcher'
