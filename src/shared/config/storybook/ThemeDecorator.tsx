import { type DecoratorFn } from '@storybook/react'
import { type THEME, ThemeProvider } from '../theme'
import classes from 'app/App.module.scss'

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
