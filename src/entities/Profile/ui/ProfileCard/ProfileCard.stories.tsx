import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ProfileCard } from './ProfileCard'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { THEME } from 'shared/config/theme'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'

const meta: ComponentMeta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
}
export default meta

const Template: ComponentStory<typeof ProfileCard> = (args) => {
    return <ProfileCard {...args} />
}

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [StoreDecorator({}), ThemeDecorator(THEME.DARK)]
