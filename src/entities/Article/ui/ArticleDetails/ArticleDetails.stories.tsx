import { generateAppStories } from '@/shared/config/storybook/generateAppStories'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { articles } from '../../testing'
import { ArticleDetails } from './ArticleDetails'

const [article] = articles

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
