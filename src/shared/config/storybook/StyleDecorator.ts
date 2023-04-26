import { type DecoratorFn } from '@storybook/react'

import '@/app/styles'

export const StyleDecorator: DecoratorFn = (story) => {
    return story()
}
