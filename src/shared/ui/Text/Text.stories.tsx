import { type ComponentProps } from 'react'
import {
    type AppStoryItem,
    generateAppStories,
} from '@/shared/config/storybook/generateAppStories'
import { capitalize } from '@/shared/lib/capitalize'
import { Text } from './Text'

const themes = ['primary', 'error', 'inverted'] as const
const aligns = ['right', 'left', 'center'] as const
const sizes = ['S', 'M', 'L'] as const

const stories: Array<AppStoryItem<ComponentProps<typeof Text>>> = []
themes.forEach((theme) => {
    aligns.forEach((align) => {
        sizes.forEach((size) => {
            stories.push({
                key: `${capitalize(theme)}${capitalize(align)}${capitalize(
                    size
                )}`,
                args: {
                    title: 'Lorem title',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                    theme,
                    align,
                    size,
                },
            })

            stories.push({
                key: `OnlyTitle${capitalize(theme)}${capitalize(
                    align
                )}${capitalize(size)}`,
                args: {
                    title: 'Lorem title',
                    theme,
                    align,
                    size,
                },
            })

            stories.push({
                key: `OnlyText${capitalize(theme)}${capitalize(
                    align
                )}${capitalize(size)}`,
                args: {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                    theme,
                    align,
                    size,
                },
            })
        })
    })
})

generateAppStories('shared/Text', Text, stories)
