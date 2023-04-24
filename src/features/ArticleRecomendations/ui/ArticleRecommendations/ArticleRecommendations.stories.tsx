import { articles } from '@/entities/Article/testing'
import { generateAppStories } from '@/shared/config/storybook/generateAppStories'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { ArticleRecommendations } from './ArticleRecommendations'

const articlesMock = articles.slice(0, 4)

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
                    response: articlesMock,
                },
            ],
        },
    }
)
