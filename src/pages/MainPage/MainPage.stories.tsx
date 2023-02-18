import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import MainPage from './MainPage'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { THEME } from 'shared/config/theme'

const meta: ComponentMeta<typeof MainPage> = {
  title: 'pages/MainPage',
  component: MainPage
}
export default meta

const Template: ComponentStory<typeof MainPage> = (args) => {
  return <MainPage {...args}/>
}

export const Primary = Template.bind({})
Primary.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(THEME.DARK)]
