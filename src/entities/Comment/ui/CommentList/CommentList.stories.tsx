import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { CommentList } from './CommentList'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { THEME } from 'shared/config/theme'

const meta: ComponentMeta<typeof CommentList> = {
    title: 'pages/CommentList',
    component: CommentList,
}
export default meta

const Template: ComponentStory<typeof CommentList> = (args) => {
    return <CommentList {...args} />
}

export const Primary = Template.bind({})
Primary.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(THEME.DARK)]
