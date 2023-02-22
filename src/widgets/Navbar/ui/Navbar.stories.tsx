import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Navbar } from './Navbar'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { THEME } from 'shared/config/theme'
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator'

const meta: ComponentMeta<typeof Navbar> = {
    title: 'widgets/Navbar',
    component: Navbar,
}
export default meta

const Template: ComponentStory<typeof Navbar> = (args) => {
    return <Navbar {...args} />
}

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [StoreDecorator({}), ThemeDecorator(THEME.DARK)]
