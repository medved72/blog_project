import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ProfileCard } from './ProfileCard'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
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

const avatar =
    'https://media.istockphoto.com/id/1305665241/vector/' +
    'anonymous-gender-neutral-face-avatar-incognito-head-silhouette-stock-illustration.jpg?' +
    's=170667a&w=0&k=20&c=hdSlOI6dkmjABHFBYK2ZsA0_-iSENg7k9u_Sa4R9GxY='

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
}
WithError.decorators = [StoreDecorator({})]

export const WithLoading = Template.bind({})
WithLoading.args = {
    loading: true,
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
}
WithErrorDark.decorators = [StoreDecorator({}), ThemeDecorator(THEME.DARK)]

export const WithLoadingDark = Template.bind({})
WithLoadingDark.args = {
    loading: true,
}
WithLoadingDark.decorators = [StoreDecorator({}), ThemeDecorator(THEME.DARK)]
