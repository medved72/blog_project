import { Country } from '@/shared/const/country'
import { Currency } from '@/shared/const/currency'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { generateAppStories } from '@/shared/config/storybook/generateAppStories'

import { ProfileCard } from './ProfileCard'

generateAppStories('entities/ProfileCard', ProfileCard, [
    {
        key: 'primary',
        args: {
            profile: {
                id: '1',
                first: 'Дмитрий',
                lastname: 'Бобырев',
                age: 24,
                currency: Currency.RUB,
                country: Country.Russia,
                city: 'Tyumen',
                username: 'admin',
                avatar:
                    'https://media.istockphoto.com/id/1305665241/vector/' +
                    'anonymous-gender-neutral-face-avatar-incognito-head-silhouette-stock-illustration.jpg?' +
                    's=170667a&w=0&k=20&c=hdSlOI6dkmjABHFBYK2ZsA0_-iSENg7k9u_Sa4R9GxY=',
            },
        },
        decorators: [StoreDecorator({})],
    },
    {
        key: 'withError',
        args: { error: ['SERVER_ERROR'] },
        decorators: [StoreDecorator({})],
    },
    {
        key: 'withLoading',
        args: { loading: true },
        decorators: [StoreDecorator({})],
    },
])
