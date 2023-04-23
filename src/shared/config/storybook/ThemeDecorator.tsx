import { type DecoratorFn } from '@storybook/react'
import classes from '@/app/App.module.scss'
import { type THEME, ThemeProvider } from '../theme'

export const ThemeDecorator = (theme: THEME): DecoratorFn => {
    return function ThemeDecorator(StoryComponent) {
        return (
            <ThemeProvider defaultTheme={theme}>
                <div
                    className={`${classes.app} ${theme}Theme`}
                    style={{ minHeight: 'auto' }}
                >
                    <StoryComponent />
                </div>
            </ThemeProvider>
        )
    }
}
