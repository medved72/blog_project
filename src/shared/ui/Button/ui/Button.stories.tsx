import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Button } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { THEME } from 'shared/config/theme'
import { capitalize } from 'shared/lib/capitalize'

const meta: ComponentMeta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
}
export default meta

type ButtonStory = ComponentStory<typeof Button>
const Template: ButtonStory = (args) => {
    return <Button {...args} />
}

export const Primary = Template.bind({})
Primary.args = { children: 'Text' }

const themes = [
    'background',
    'backgroundInverted',
    'clear',
    'outline',
    'clearInverted',
] as const
const sizes = ['l', 'm', 'xl'] as const

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

export const {
    clearM,
    clearMSquare,
    clearL,
    clearLSquare,
    clearXl,
    clearXlSquare,
    clearInvertedM,
    clearInvertedL,
    clearInvertedXl,
    outlineM,
    outlineMSquare,
    outlineL,
    outlineLSquare,
    outlineXl,
    outlineXlSquare,
    backgroundM,
    backgroundMSquare,
    backgroundL,
    backgroundLSquare,
    backgroundXl,
    backgroundXlSquare,
    backgroundInvertedM,
    backgroundInvertedMSquare,
    backgroundInvertedL,
    backgroundInvertedLSquare,
    backgroundInvertedXl,
    backgroundInvertedXlSquare,

    clearDark,
    clearMSquareDark,
    clearLDark,
    clearLSquareDark,
    clearXlDark,
    clearXlSquareDark,
    clearInvertedMDark,
    clearInvertedLDark,
    clearInvertedXlDark,
    outlineDark,
    outlineMSquareDark,
    outlineLDark,
    outlineLSquareDark,
    outlineXlDark,
    outlineXlSquareDark,
    backgroundDark,
    backgroundMSquareDark,
    backgroundLDark,
    backgroundLSquareDark,
    backgroundXlDark,
    backgroundXlSquareDark,
    backgroundInvertedDark,
    backgroundInvertedMSquareDark,
    backgroundInvertedLDark,
    backgroundInvertedLSquareDark,
    backgroundInvertedXlDark,
    backgroundInvertedXlSquareDark,
} = {
    ...SizeThemeTemplates,
    ...SquareThemeTemplates,
    ...DarkThemeTemplates,
    ...DarkSizeThemeTemplates,
    ...DarkSquareThemeTemplates,
}
