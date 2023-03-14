import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ArticleText } from './ArticleText'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { THEME } from 'shared/config/theme'

const meta: ComponentMeta<typeof ArticleText> = {
    title: 'entities/ArticleText',
    component: ArticleText,
}
export default meta

const Template: ComponentStory<typeof ArticleText> = (args) => {
    return <ArticleText {...args} />
}

export const Primary = Template.bind({})
Primary.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(THEME.DARK)]
