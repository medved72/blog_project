import { type DecoratorFn } from '@storybook/react'
// eslint-disable-next-line blog-project-plugin/public-api-imports
import '@/app/styles/index.scss'

export const StyleDecorator: DecoratorFn = (story) => {
    return story()
}
