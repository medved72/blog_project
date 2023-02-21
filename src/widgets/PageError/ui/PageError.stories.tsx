import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { PageError } from './PageError'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { THEME } from 'shared/config/theme'

const meta: ComponentMeta<typeof PageError> = {
    title: 'widgets/PageError',
    component: PageError,
}
export default meta

const Template: ComponentStory<typeof PageError> = (args) => {
    return <PageError {...args} />
}

export const Primary = Template.bind({})
Primary.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(THEME.DARK)]
