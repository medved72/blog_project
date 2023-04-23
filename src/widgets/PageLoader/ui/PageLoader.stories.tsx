import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { THEME } from '@/shared/config/theme'
import { PageLoader } from './PageLoader'

const meta: ComponentMeta<typeof PageLoader> = {
    title: 'widgets/PageLoader',
    component: PageLoader,
}
export default meta

const Template: ComponentStory<typeof PageLoader> = (args) => {
    return <PageLoader {...args} />
}

export const Primary = Template.bind({})
Primary.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(THEME.DARK)]
