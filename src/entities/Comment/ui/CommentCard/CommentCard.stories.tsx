import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { CommentCard } from './CommentCard'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { THEME } from 'shared/config/theme'

const meta: ComponentMeta<typeof CommentCard> = {
    title: 'pages/CommentCard',
    component: CommentCard,
}
export default meta

const Template: ComponentStory<typeof CommentCard> = (args) => {
    return <CommentCard {...args} />
}

export const Primary = Template.bind({})
Primary.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(THEME.DARK)]
