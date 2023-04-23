import { type ComponentStory, storiesOf } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { THEME } from '@/shared/config/theme'
import { capitalize } from '@/shared/lib/capitalize/capitalize'
import { Button, type ButtonTheme } from './Button'

const stories = storiesOf('shared/Button', module)

type ButtonStory = ComponentStory<typeof Button>
const Template: ButtonStory = (args) => {
    return <Button {...args} />
}

const Primary = Template.bind({})
Primary.args = { children: 'Text' }

const themes: Readonly<ButtonTheme[]> = [
    'outline',
    'background',
    'backgroundInverted',
    'clear',
    'clearInverted',
    'outlineRed',
] as const

const sizes = ['m', 'l', 'xl'] as const

themes.forEach((theme) => {
    sizes.forEach((size) => {
        const storiesArgs = [
            {
                key: `${theme}${capitalize(size)}`,
                args: {
                    children: theme,
                    theme,
                    size,
                },
            },
            {
                key: `${theme}${capitalize(size)}Square`,
                args: {
                    children: '*',
                    theme,
                    size,
                    square: true,
                },
            },
        ]

        storiesArgs.forEach(({ key, args }) => {
            stories.add(capitalize(key), Template.bind({}), { args })
            stories.add(capitalize(`${key}Dark`), Template.bind({}), {
                args,
                decorators: [ThemeDecorator(THEME.DARK)],
            })
        })
    })
})
