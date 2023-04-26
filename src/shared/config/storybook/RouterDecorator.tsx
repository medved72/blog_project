import { BrowserRouter } from 'react-router-dom'
import { type DecoratorFn } from '@storybook/react'

export const RouterDecorator: DecoratorFn = (story) => {
    return <BrowserRouter>{story()}</BrowserRouter>
}
