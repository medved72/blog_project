import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ArticleCode } from './ArticleCode'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { THEME } from 'shared/config/theme'

const meta: ComponentMeta<typeof ArticleCode> = {
    title: 'entities/ArticleCode',
    component: ArticleCode,
}
export default meta

const Template: ComponentStory<typeof ArticleCode> = (args) => {
    return <ArticleCode {...args} />
}

export const Primary = Template.bind({})
Primary.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(THEME.DARK)]
