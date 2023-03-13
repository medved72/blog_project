import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ArticleDetailsPage } from './ArticleDetailsPage'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { THEME } from 'shared/config/theme'

const meta: ComponentMeta<typeof ArticleDetailsPage> = {
    title: 'pages/ArticleDetailsPage',
    component: ArticleDetailsPage,
}
export default meta

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => {
    return <ArticleDetailsPage {...args} />
}

export const Primary = Template.bind({})
Primary.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(THEME.DARK)]
