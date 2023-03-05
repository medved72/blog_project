import { type ComponentStory, storiesOf } from '@storybook/react'
import { Button } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { THEME } from 'shared/config/theme'
import { capitalize } from 'shared/lib/capitalize/capitalize'

const stories = storiesOf('shared/Button', module)

type ButtonStory = ComponentStory<typeof Button>
const Template: ButtonStory = (args) => {
    return <Button {...args} />
}

const Primary = Template.bind({})
Primary.args = { children: 'Text' }

const themes = [
    'background',
    'backgroundInverted',
    'clear',
    'outline',
    'clearInverted',
] as const
const sizes = ['m', 'l', 'xl'] as const

type ThemeKeys = (typeof themes)[number]
type SizeValues = (typeof sizes)[number]
type ThemeKeysWithSize = `${ThemeKeys}${Capitalize<SizeValues>}`
const SizeThemeTemplates = themes.reduce((acc, theme) => {
    sizes.forEach((size) => {
        const key = `${theme}${capitalize(size)}` as const
        acc[key] = Template.bind({})
        acc[key].storyName = capitalize(theme) + capitalize(size)
        acc[key].args = {
            children: theme,
            theme,
            size,
        }
    })
    return acc
}, {} as Record<ThemeKeysWithSize, ComponentStory<typeof Button>>)

type SquareThemeTemplatesKeys = `${ThemeKeys}${Capitalize<SizeValues>}Square`
const SquareThemeTemplates = themes.reduce((acc, theme) => {
    sizes.forEach((size) => {
        const key = `${theme}${capitalize(size)}Square` as const
        acc[key] = Template.bind({})
        acc[key].storyName = capitalize(key)
        acc[key].args = {
            children: '*',
            theme,
            size,
            square: true,
        }
    })
    return acc
}, {} as Record<SquareThemeTemplatesKeys, ComponentStory<typeof Button>>)

type DarkThemeKeys = `${ThemeKeys}Dark`
const DarkThemeTemplates = themes.reduce((acc, theme) => {
    const key = `${theme}Dark` as const
    acc[key] = Template.bind({})
    acc[key].storyName = capitalize(key)
    acc[key].args = {
        children: theme,
        theme,
    }
    acc[key].decorators = [ThemeDecorator(THEME.DARK)]
    return acc
}, {} as Record<DarkThemeKeys, ComponentStory<typeof Button>>)

type DarkThemeWithSizeKeys = `${ThemeKeys}${Capitalize<SizeValues>}Dark`
const DarkSizeThemeTemplates = themes.reduce((acc, theme) => {
    sizes.forEach((size) => {
        const key = `${theme}${capitalize(size)}Dark` as const
        acc[key] = Template.bind({})
        acc[key].storyName = capitalize(key)
        acc[key].args = {
            children: theme,
            theme,
            size,
        }
        acc[key].decorators = [ThemeDecorator(THEME.DARK)]
    })
    return acc
}, {} as Record<DarkThemeWithSizeKeys, ComponentStory<typeof Button>>)

type DarkSquareThemeTemplatesKeys =
    `${ThemeKeys}${Capitalize<SizeValues>}SquareDark`
const DarkSquareThemeTemplates = themes.reduce((acc, theme) => {
    sizes.forEach((size) => {
        const key = `${theme}${capitalize(size)}SquareDark` as const
        acc[key] = Template.bind({})
        acc[key].storyName = capitalize(key)
        acc[key].args = {
            children: '*',
            theme,
            size,
            square: true,
        }
        acc[key].decorators = [ThemeDecorator(THEME.DARK)]
    })
    return acc
}, {} as Record<DarkSquareThemeTemplatesKeys, ComponentStory<typeof Button>>)

const storiesTemplates = {
    ...SizeThemeTemplates,
    ...SquareThemeTemplates,
    ...DarkThemeTemplates,
    ...DarkSizeThemeTemplates,
    ...DarkSquareThemeTemplates,
}

Object.entries(storiesTemplates).forEach(([key, story]) => {
    stories.add(capitalize(key), story, {
        decorators: story.decorators,
        args: story.args,
    })
})
