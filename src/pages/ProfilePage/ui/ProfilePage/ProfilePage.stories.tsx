import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import ProfilePage from './ProfilePage'
import { generateAppStories } from 'shared/config/storybook/generateAppStories'
import { ROUTES } from '../../../../shared/config/routes'

generateAppStories(
    'pages/ProfilePage',
    ProfilePage,
    [
        {
            key: 'primary',
            args: {},
            decorators: [StoreDecorator({})],
        },
    ],
    {
        parameters: {
            reactRouter: {
                routePath: ROUTES.PROFILE,
                routeParams: { profileId: '1' },
            },
            mockData: [
                {
                    url: '/profile/1',
                    method: 'GET',
                    status: 200,
                    response: {
                        first: 'Дмитрий',
                        lastname: 'Бобырев',
                        age: 24,
                        currency: 'RUB',
                        country: 'Russia',
                        city: 'Tyumen',
                        username: 'admin',
                        avatar:
                            'https://media.istockphoto.com/id/1305665241/vector' +
                            '/anonymous-gender-neutral-face-avatar-incognito-head-silhouette-stock-illustration.jpg' +
                            '?s=170667a&w=0&k=20&c=hdSlOI6dkmjABHFBYK2ZsA0_-iSENg7k9u_Sa4R9GxY=',
                    },
                },
            ],
        },
    }
)
