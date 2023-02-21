import { createContext } from 'react'
import { THEME, type ThemeContextProps } from '../config'

export const ThemeContext = createContext<ThemeContextProps>({
    theme: THEME.LIGHT,
    setTheme: () => {
        throw new Error('Method setTheme must be implemented')
    },
})
