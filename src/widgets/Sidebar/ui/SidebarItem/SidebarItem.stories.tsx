import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { SidebarItem } from './SidebarItem'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { THEME } from 'shared/config/theme'
import { itemsList } from '../../model/items'

const meta: ComponentMeta<typeof SidebarItem> = {
    title: 'pages/SidebarItem',
    component: SidebarItem,
}
export default meta

const Template: ComponentStory<typeof SidebarItem> = (args) => {
    return <SidebarItem {...args} />
}

export const Primary = Template.bind({})
Primary.args = {
    item: itemsList[0],
    collapsed: false,
}

export const PrimaryCollapsed = Template.bind({})
PrimaryCollapsed.args = {
    item: itemsList[0],
    collapsed: true,
}

export const Dark = Template.bind({})
Dark.args = { item: itemsList[0], collapsed: false }
Dark.decorators = [ThemeDecorator(THEME.DARK)]

export const DarkCollapsed = Template.bind({})
DarkCollapsed.args = { item: itemsList[0], collapsed: true }
DarkCollapsed.decorators = [ThemeDecorator(THEME.DARK)]
