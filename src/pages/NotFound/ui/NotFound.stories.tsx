import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { THEME } from '@/shared/config/theme'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'

import { NotFound } from './NotFound'

const meta: ComponentMeta<typeof NotFound> = {
    title: 'pages/NotFound',
    component: NotFound,
}
export default meta

const Template: ComponentStory<typeof NotFound> = (args) => {
    return <NotFound {...args} />
}

export const Primary = Template.bind({})
Primary.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(THEME.DARK)]
