import { type DecoratorFn } from '@storybook/react'
import { type THEME, ThemeProvider, useTheme } from 'shared/config/theme'
import classes from 'app/App.module.scss'
import { type FC } from 'react'

export const ThemeProviderDecorator = (theme: THEME): DecoratorFn => {
    const Decorated: FC<{ StoryComponent: Parameters<DecoratorFn>[0] }> = ({
        StoryComponent,
    }) => {
        const { theme } = useTheme()
        return (
            <div className={`${classes.app} ${theme}Theme`}>
                <StoryComponent />
            </div>
        )
    }

    const Decorator: DecoratorFn = (StoryComponent) => {
        return (
            <ThemeProvider defaultTheme={theme}>
                <Decorated StoryComponent={StoryComponent} />
            </ThemeProvider>
        )
    }

    return Decorator
}
