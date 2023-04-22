import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { DotsSpinner } from './DotsSpinner'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { THEME } from '@/shared/config/theme'

const meta: ComponentMeta<typeof DotsSpinner> = {
    title: 'shared/DotsSpinner',
    component: DotsSpinner,
}
export default meta

const Template: ComponentStory<typeof DotsSpinner> = (args) => {
    return <DotsSpinner {...args} />
}

export const Primary = Template.bind({})
Primary.args = {}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {}
PrimaryDark.decorators = [ThemeDecorator(THEME.DARK)]
