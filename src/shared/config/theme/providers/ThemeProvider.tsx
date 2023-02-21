import { type FC, type PropsWithChildren, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, THEME } from '../config'
import { ThemeContext } from '../model/ThemeContext'

const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEME) || THEME.LIGHT

export const ThemeProvider: FC<PropsWithChildren<{ defaultTheme?: THEME }>> = ({
    defaultTheme: defaultThemeFromProps,
    children,
}) => {
    const [theme, setTheme] = useState<THEME>(
        defaultThemeFromProps ?? defaultTheme
    )

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}
