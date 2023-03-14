import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ArticleCommentsList } from './ArticleCommentsList'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { THEME } from 'shared/config/theme'

const meta: ComponentMeta<typeof ArticleCommentsList> = {
    title: 'pages/ArticleCommentsList',
    component: ArticleCommentsList,
}
export default meta

const Template: ComponentStory<typeof ArticleCommentsList> = (args) => {
    return <ArticleCommentsList {...args} />
}

export const Primary = Template.bind({})
Primary.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(THEME.DARK)]
