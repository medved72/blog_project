import { type DecoratorFn } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

export const RouterDecorator: DecoratorFn = (story) => {
  return <BrowserRouter>{story()}</BrowserRouter>
}
