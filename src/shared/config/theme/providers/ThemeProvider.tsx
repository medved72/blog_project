import { type FC, type PropsWithChildren, useEffect, useState } from 'react'

import { LOCAL_STORAGE_THEME_KEY, THEME } from '../config'
import { ThemeContext } from '../model/ThemeContext'

const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEME) || THEME.LIGHT

export const ThemeProvider: FC<PropsWithChildren<{ theme?: THEME }>> = ({
    theme: themeFromProps,
    children,
}) => {
    const [theme, setTheme] = useState<THEME>(themeFromProps ?? defaultTheme)

    const [isThemeInited, setIsThemeInited] = useState(false)

    useEffect(() => {
        if (!isThemeInited && themeFromProps) {
            setTheme(themeFromProps)
            setIsThemeInited(true)
        }
    }, [isThemeInited, themeFromProps])

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
