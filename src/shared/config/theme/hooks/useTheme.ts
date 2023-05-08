import { useCallback, useContext } from 'react'

import { THEME } from '../config'
import { ThemeContext } from '../model/ThemeContext'

interface UseThemeResult {
    theme: THEME
    toggleTheme: (saveAction?: (theme: THEME) => void) => void
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = useCallback(
        (saveAction?: (theme: THEME) => void) => {
            let newTheme
            switch (theme) {
                case THEME.LIGHT:
                    newTheme = THEME.ORANGE
                    break
                case THEME.DARK:
                    newTheme = THEME.LIGHT
                    break
                case THEME.ORANGE:
                    newTheme = THEME.DARK
                    break
                default:
                    newTheme = THEME.LIGHT
            }
            setTheme(newTheme)
            saveAction?.(newTheme)
        },
        [theme, setTheme]
    )

    return { theme, toggleTheme }
}
