import { useCallback, useContext } from 'react'
import { LOCAL_STORAGE_THEME_KEY, THEME } from '../config'
import { ThemeContext } from '../model/ThemeContext'

interface UseThemeResult {
    theme: THEME
    toggleTheme: () => void
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = useCallback(() => {
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
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }, [theme, setTheme])

    return { theme, toggleTheme }
}
