import { type FC, type PropsWithChildren } from 'react'

import { useUserJsonSettings } from '@/entities/User'

import { ThemeProvider } from '@/shared/config/theme'
import { isValidTheme } from '@/shared/lib/isValidTheme'

export const AppThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    const { theme } = useUserJsonSettings()

    return (
        <ThemeProvider theme={isValidTheme(theme) ? theme : undefined}>
            {children}
        </ThemeProvider>
    )
}
