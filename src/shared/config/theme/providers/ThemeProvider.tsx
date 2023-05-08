import { type FC, type PropsWithChildren, useEffect, useState } from 'react'

import { THEME } from '../config'
import { ThemeContext } from '../model/ThemeContext'

const defaultTheme = THEME.LIGHT

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
