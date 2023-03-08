import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ProfileCard } from './ProfileCard'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import avatar from 'shared/assets/tests/avatar.jpg'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { THEME } from 'shared/config/theme'

const meta: ComponentMeta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
}
export default meta

const Template: ComponentStory<typeof ProfileCard> = (args) => {
    return <ProfileCard {...args} />
}

export const Primary = Template.bind({})
Primary.args = {
    profile: {
        first: 'Дмитрий',
        lastname: 'Бобырев',
        age: 24,
        currency: Currency.RUB,
        country: Country.Russia,
        city: 'Tyumen',
        username: 'admin',
        avatar,
    },
}
Primary.decorators = [StoreDecorator({})]

export const WithError = Template.bind({})
WithError.args = {
    error: ['SERVER_ERROR'],
    profile: {
        first: 'Дмитрий',
        lastname: 'Бобырев',
        age: 24,
        currency: Currency.RUB,
        country: Country.Russia,
        city: 'Tyumen',
        username: 'admin',
        avatar,
    },
}
WithError.decorators = [StoreDecorator({})]

export const WithLoading = Template.bind({})
WithLoading.args = {
    loading: true,
    profile: {
        first: 'Дмитрий',
        lastname: 'Бобырев',
        age: 24,
        currency: Currency.RUB,
        country: Country.Russia,
        city: 'Tyumen',
        username: 'admin',
        avatar,
    },
}
WithLoading.decorators = [StoreDecorator({})]

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    profile: {
        first: 'Дмитрий',
        lastname: 'Бобырев',
        age: 24,
        currency: Currency.RUB,
        country: Country.Russia,
        city: 'Tyumen',
        username: 'admin',
        avatar,
    },
}
PrimaryDark.decorators = [StoreDecorator({}), ThemeDecorator(THEME.DARK)]

export const WithErrorDark = Template.bind({})
WithErrorDark.args = {
    error: ['SERVER_ERROR'],
    profile: {
        first: 'Дмитрий',
        lastname: 'Бобырев',
        age: 24,
        currency: Currency.RUB,
        country: Country.Russia,
        city: 'Tyumen',
        username: 'admin',
        avatar,
    },
}
WithErrorDark.decorators = [StoreDecorator({}), ThemeDecorator(THEME.DARK)]

export const WithLoadingDark = Template.bind({})
WithLoadingDark.args = {
    loading: true,
    profile: {
        first: 'Дмитрий',
        lastname: 'Бобырев',
        age: 24,
        currency: Currency.RUB,
        country: Country.Russia,
        city: 'Tyumen',
        username: 'admin',
        avatar,
    },
}
WithLoadingDark.decorators = [StoreDecorator({}), ThemeDecorator(THEME.DARK)]
