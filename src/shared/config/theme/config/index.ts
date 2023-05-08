export enum THEME {
    LIGHT = 'light',
    DARK = 'dark',
    ORANGE = 'orange',
}

export interface ThemeContextProps {
    theme: THEME
    setTheme: (newTheme: THEME) => void
}
