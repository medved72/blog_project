import { type FC, memo } from 'react'

import { Button } from 'shared/ui/Button'
import { THEME, useTheme } from 'shared/config/theme'
import { classNames } from 'shared/lib/classNames/classNames'

import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'

export interface SwitchThemeProps {
    className?: string
}

export const ThemeSwitcher: FC<SwitchThemeProps> = memo(({ className }) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button
            className={classNames('', {}, [className])}
            theme="clear"
            onClick={toggleTheme}
        >
            {theme === THEME.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    )
})
ThemeSwitcher.displayName = 'ThemeSwitcher'
