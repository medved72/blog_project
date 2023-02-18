import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { NotFound } from './NotFound'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { THEME } from 'shared/config/theme'

const meta: ComponentMeta<typeof NotFound> = {
  title: 'pages/NotFound',
  component: NotFound
}
export default meta

const Template: ComponentStory<typeof NotFound> = (args) => {
  return <NotFound {...args}/>
}

export const Primary = Template.bind({})
Primary.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(THEME.DARK)]
