import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ProfilePageHeader } from './ProfilePageHeader'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { THEME } from 'shared/config/theme'

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

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(THEME.DARK)]
