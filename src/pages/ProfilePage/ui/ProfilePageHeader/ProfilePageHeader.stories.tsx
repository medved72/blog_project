import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ProfilePageHeader } from './ProfilePageHeader'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { THEME } from 'shared/config/theme'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'

const meta: ComponentMeta<typeof ProfilePageHeader> = {
    title: 'pages/ProfilePageHeader',
    component: ProfilePageHeader,
}
export default meta

const Template: ComponentStory<typeof ProfilePageHeader> = (args) => {
    return <ProfilePageHeader {...args} />
}

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [StoreDecorator({}), ThemeDecorator(THEME.DARK)]
