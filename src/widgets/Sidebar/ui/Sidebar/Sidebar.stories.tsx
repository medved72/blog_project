import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { usersMock } from '@/entities/User/testing'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { THEME } from '@/shared/config/theme'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'

import { Sidebar } from './Sidebar'

const [authData] = usersMock

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
        user: { authData },
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
        user: { authData },
    }),
]

export const NoAuthDark = Template.bind({})
NoAuthDark.args = {}
NoAuthDark.decorators = [ThemeDecorator(THEME.DARK), StoreDecorator({})]
