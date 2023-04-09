import { ArticleRecommendations } from './ArticleRecommendations'
import { generateAppStories } from 'shared/config/storybook/generateAppStories'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { type Article } from 'entities/Article'
import db from '../../../../../json-server/db.json'

const articles = db.articles.slice(0, 4).map(({ userId, ...article }) => ({
    ...article,
    user: db.users.find((user) => user.id === userId)!,
})) as Article[]

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
