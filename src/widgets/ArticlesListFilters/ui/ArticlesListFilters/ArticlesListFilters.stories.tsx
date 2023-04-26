import { articles } from '@/entities/Article/testing'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { generateAppStories } from '@/shared/config/storybook/generateAppStories'

import { ArticlesListFilters } from './ArticlesListFilters'

const articlesMock = articles.slice(0, 8)

generateAppStories(
    'widgets/ArticlesListFilters',
    ArticlesListFilters,
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
                    url: '/articles?_expand=user&_page=0&_limit=20&_sort=createdAt&_order=asc&q=',
                    method: 'GET',
                    status: 200,
                    response: articlesMock,
                },
            ],
        },
    }
)
