import { THEME } from '../../config/theme'

export const isValidTheme = (value: unknown): value is THEME => {
    if (typeof value !== 'string') {
        return false
    }

    return Object.values(THEME).includes(value as THEME)
}
