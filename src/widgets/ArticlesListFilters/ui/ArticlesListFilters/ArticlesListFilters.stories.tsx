import { ArticlesListFilters } from './ArticlesListFilters'
import { generateAppStories } from '@/shared/config/storybook/generateAppStories'
import { type Article } from '@/entities/Article'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import db from '../../../../../json-server/db.json'

const articles = db.articles.slice(0, 8).map(({ userId, ...article }) => ({
    ...article,
    user: db.users.find((user) => user.id === userId)!,
})) as Article[]

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
                    response: articles,
                },
            ],
        },
    }
)
