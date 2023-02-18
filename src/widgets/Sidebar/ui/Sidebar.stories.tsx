import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Sidebar } from './Sidebar'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { THEME } from 'shared/config/theme'

const meta: ComponentMeta<typeof Sidebar> = {
  title: 'widgets/Sidebar',
  component: Sidebar
}
export default meta

const Template: ComponentStory<typeof Sidebar> = (args) => {
  return <Sidebar {...args}/>
}

export const Primary = Template.bind({})
Primary.args = {
}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(THEME.DARK)]
