import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { generateAppStories } from '@/shared/config/storybook/generateAppStories'

import { ArticleDetails } from './ArticleDetails'
import { articlesMock } from '../../testing'

const [article] = articlesMock

generateAppStories(
    'entities/ArticleDetails',
    ArticleDetails,
    [
        {
            key: 'primary',
            args: { id: '1' },
            decorators: [StoreDecorator({})],
        },
    ],
    {
        parameters: {
            mockData: [
                {
                    url: '/articles/1?_expand=user',
                    method: 'GET',
                    status: 200,
                    response: article,
                },
            ],
        },
    }
)
