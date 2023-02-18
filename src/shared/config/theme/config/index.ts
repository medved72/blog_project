export enum THEME {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface ThemeContextProps {
  theme: THEME
  setTheme: (newTheme: THEME) => void
}

export const LOCAL_STORAGE_THEME_KEY = 'currentTheme'
