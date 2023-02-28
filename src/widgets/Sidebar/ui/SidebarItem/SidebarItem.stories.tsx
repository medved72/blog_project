import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { SidebarItem } from './SidebarItem'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { THEME } from 'shared/config/theme'

const meta: ComponentMeta<typeof SidebarItem> = {
    title: 'pages/SidebarItem',
    component: SidebarItem,
}
export default meta

const Template: ComponentStory<typeof SidebarItem> = (args) => {
    return <SidebarItem {...args} />
}

export const Primary = Template.bind({})
Primary.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(THEME.DARK)]
