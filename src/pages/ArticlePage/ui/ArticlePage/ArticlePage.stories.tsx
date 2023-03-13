import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ArticlePage } from './ArticlePage'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { THEME } from 'shared/config/theme'

const meta: ComponentMeta<typeof ArticlePage> = {
    title: 'pages/ArticlePage',
    component: ArticlePage,
}
export default meta

const Template: ComponentStory<typeof ArticlePage> = (args) => {
    return <ArticlePage {...args} />
}

export const Primary = Template.bind({})
Primary.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(THEME.DARK)]
