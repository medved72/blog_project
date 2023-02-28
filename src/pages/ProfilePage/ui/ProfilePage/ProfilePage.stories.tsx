import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import ProfilePage from './ProfilePage'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { THEME } from 'shared/config/theme'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'

const meta: ComponentMeta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
}
export default meta

const Template: ComponentStory<typeof ProfilePage> = (args) => {
    return <ProfilePage {...args} />
}

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [StoreDecorator({}), ThemeDecorator(THEME.DARK)]
