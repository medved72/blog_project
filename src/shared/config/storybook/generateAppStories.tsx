import { type Parameters as SbParameters, storiesOf } from '@storybook/react'
import { type FC } from 'react'
import { capitalize } from 'shared/lib/capitalize'
import { ThemeDecorator } from './ThemeDecorator'
import { THEME } from '../theme'

export interface AppStoryItem<T extends Record<string, any>> {
    key: string
    args: T
    decorators?: any[]
}

export const generateAppStories = <T extends Record<string, any>>(
    kind: Parameters<typeof storiesOf>[0],
    Component: FC<T>,
    stories: Array<AppStoryItem<T>>,
    options: { parameters?: SbParameters } = {}
) => {
    const storiesKind = storiesOf(kind, module)

    if (options.parameters) {
        storiesKind.addParameters(options.parameters)
    }

    stories.forEach(({ key, args, decorators = [] }) => {
        storiesKind.add(
            capitalize(key),
            (props: any) => <Component {...props} />,
            {
                args,
                decorators: [...decorators],
            }
        )

        storiesKind.add(
            capitalize(`${key}Dark`),
            (props: any) => <Component {...props} />,
            {
                args,
                decorators: [ThemeDecorator(THEME.DARK), ...decorators],
            }
        )

        storiesKind.add(
            capitalize(`${key}Orange`),
            (props: any) => <Component {...props} />,
            {
                args,
                decorators: [ThemeDecorator(THEME.ORANGE), ...decorators],
            }
        )
    })

    return storiesKind
}
