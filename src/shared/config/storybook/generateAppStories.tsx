import { type ComponentStory, storiesOf } from '@storybook/react'
import { type FC } from 'react'
import { capitalize } from 'shared/lib/capitalize'
import { ThemeDecorator } from './ThemeDecorator'
import { THEME } from 'shared/config/theme'

export interface AppStoryItem<T extends Record<string, any>> {
    key: string
    args: T
    decorators?: any[]
}

export const generateAppStories = <T extends Record<string, any>>(
    kind: Parameters<typeof storiesOf>[0],
    Component: FC<T>,
    stories: Array<AppStoryItem<T>>
) => {
    const storiesKind = storiesOf(kind, module)
    const Template: ComponentStory<typeof Component> = (args) => (
        <Component {...args} />
    )

    stories.forEach(({ key, args, decorators = [] }) => {
        // @ts-expect-error invalid template.bind type
        storiesKind.add(capitalize(key), Template.bind({}), {
            args,
            decorators: [...decorators],
        })

        // @ts-expect-error invalid template.bind type
        storiesKind.add(capitalize(`${key}Dark`), Template.bind({}), {
            args,
            decorators: [ThemeDecorator(THEME.DARK), ...decorators],
        })
    })

    return storiesKind
}
