import { type DecoratorFn } from '@storybook/react'

import '@/app/styles/index.scss'

export const StyleDecorator: DecoratorFn = (story) => {
    return story()
}
