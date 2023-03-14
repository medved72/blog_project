import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ArticleImage } from './ArticleImage'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { THEME } from 'shared/config/theme'

const meta: ComponentMeta<typeof ArticleImage> = {
    title: 'entities/ArticleImage',
    component: ArticleImage,
}
export default meta

const Template: ComponentStory<typeof ArticleImage> = (args) => {
    return <ArticleImage {...args} />
}

export const Primary = Template.bind({})
Primary.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(THEME.DARK)]
