import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ArticleDetails } from './ArticleDetails'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { THEME } from 'shared/config/theme'

const meta: ComponentMeta<typeof ArticleDetails> = {
    title: 'entities/ArticleDetails',
    component: ArticleDetails,
}
export default meta

const Template: ComponentStory<typeof ArticleDetails> = (args) => {
    return <ArticleDetails {...args} />
}

export const Primary = Template.bind({})
Primary.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(THEME.DARK)]
