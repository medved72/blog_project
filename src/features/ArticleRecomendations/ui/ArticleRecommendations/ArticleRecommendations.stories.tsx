import { articlesMock } from '@/entities/Article/testing'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { generateAppStories } from '@/shared/config/storybook/generateAppStories'

import { ArticleRecommendations } from './ArticleRecommendations'

const articles = articlesMock.slice(0, 4)

generateAppStories(
    'features/ArticleRecommendations',
    ArticleRecommendations,
    [
        {
            key: 'primary',
            args: {},
            decorators: [StoreDecorator({})],
        },
    ],
    {
        parameters: {
            mockData: [
                {
                    url: `${window.origin}/articles?_expand=user&_limit=4`,
                    method: 'GET',
                    status: 200,
                    response: articles,
                },
            ],
        },
    }
)
