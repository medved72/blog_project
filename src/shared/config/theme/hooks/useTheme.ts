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
        const newTheme = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }, [theme, setTheme])

    return { theme, toggleTheme }
}
