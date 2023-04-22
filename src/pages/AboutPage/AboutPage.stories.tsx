import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import AboutPage from './AboutPage'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { THEME } from '@/shared/config/theme'

const meta: ComponentMeta<typeof AboutPage> = {
    title: 'pages/AboutPage',
    component: AboutPage,
}
export default meta

const Template: ComponentStory<typeof AboutPage> = (args) => {
    return <AboutPage {...args} />
}

export const Primary = Template.bind({})
Primary.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(THEME.DARK)]
