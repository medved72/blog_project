import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Text } from './Text'
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator'
import { THEME } from '../../config/theme'

const meta: ComponentMeta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
}
export default meta

type ModalStory = ComponentStory<typeof Text>
const Template: ModalStory = (args) => {
    return <Text {...args} />
}

export const Primary = Template.bind({})
Primary.args = {
    title: 'Lorem title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
}

export const OnlyTitle = Template.bind({})
OnlyTitle.args = {
    title: 'Lorem title',
}

export const OnlyText = Template.bind({})
OnlyText.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    title: 'Lorem title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
}
PrimaryDark.decorators = [ThemeDecorator(THEME.DARK)]

export const OnlyTitleDark = Template.bind({})
OnlyTitleDark.args = {
    title: 'Lorem title',
}
OnlyTitleDark.decorators = [ThemeDecorator(THEME.DARK)]

export const OnlyTextDark = Template.bind({})
OnlyTextDark.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
}
OnlyTextDark.decorators = [ThemeDecorator(THEME.DARK)]

export const Error = Template.bind({})
Error.args = {
    title: 'Lorem title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    theme: 'error',
}
