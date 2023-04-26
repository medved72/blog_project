import { generatePath } from 'react-router-dom'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import MainIcon from '@/shared/assets/icons/main-20-20.svg'
import { ROUTES } from '@/shared/config/routes'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { THEME } from '@/shared/config/theme'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'

import { SidebarItem } from './SidebarItem'

const item = {
    path: generatePath(ROUTES.MAIN),
    icon: MainIcon,
    i18nKey: 'Главная',
} as const

const meta: ComponentMeta<typeof SidebarItem> = {
    title: 'widgets/SidebarItem',
    component: SidebarItem,
}
export default meta

const Template: ComponentStory<typeof SidebarItem> = (args) => {
    return <SidebarItem {...args} />
}

export const Primary = Template.bind({})
Primary.args = {
    item,
    collapsed: false,
}
Primary.decorators = [StoreDecorator({})]

export const PrimaryCollapsed = Template.bind({})
PrimaryCollapsed.args = {
    item,
    collapsed: true,
}
PrimaryCollapsed.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.args = { item, collapsed: false }
Dark.decorators = [ThemeDecorator(THEME.DARK), StoreDecorator({})]

export const DarkCollapsed = Template.bind({})
DarkCollapsed.args = { item, collapsed: true }
DarkCollapsed.decorators = [ThemeDecorator(THEME.DARK), StoreDecorator({})]
