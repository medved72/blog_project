import { addDecorator } from '@storybook/react'
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator'
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator'
import { THEME } from '../../src/shared/config/theme'
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator'
import { I18nDecorator } from '../../src/shared/config/storybook/I18nDecorator'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}

export const globalTypes = {
    locale: {
        name: 'Locale',
        description: 'Internationalization locale',
        toolbar: {
            icon: 'globe',
            items: [
                { value: 'ru', title: 'Русский' },
                { value: 'en', title: 'English' },
            ],
            showName: true,
        },
    },
}

addDecorator(I18nDecorator)
addDecorator(StyleDecorator)
addDecorator(ThemeDecorator(THEME.LIGHT))
addDecorator(RouterDecorator)
