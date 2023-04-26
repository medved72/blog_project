import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { THEME } from '@/shared/config/theme'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'

import { Sidebar } from './Sidebar'

const meta: ComponentMeta<typeof Sidebar> = {
    title: 'widgets/Sidebar',
    component: Sidebar,
}
export default meta

const Template: ComponentStory<typeof Sidebar> = (args) => {
    return <Sidebar {...args} />
}

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [
    StoreDecorator({
        user: { authData: { id: '1', username: 'username', roles: ['ADMIN'] } },
    }),
]
export const NoAuth = Template.bind({})
NoAuth.args = {}
NoAuth.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
    ThemeDecorator(THEME.DARK),
    StoreDecorator({
        user: { authData: { id: '1', username: 'username', roles: ['ADMIN'] } },
    }),
]

export const NoAuthDark = Template.bind({})
NoAuthDark.args = {}
NoAuthDark.decorators = [ThemeDecorator(THEME.DARK), StoreDecorator({})]
