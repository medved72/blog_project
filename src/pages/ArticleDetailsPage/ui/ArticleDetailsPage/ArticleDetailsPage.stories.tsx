import { generateAppStories } from 'shared/config/storybook/generateAppStories'
import ArticleDetailsPage from './ArticleDetailsPage'
import { ROUTES } from 'shared/config/routes'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { type Article } from 'entities/Article'
import { type Comment } from 'entities/Comment'
import db from '../../../../../json-server/db.json'

const recommendations = db.articles
    .map(({ userId, ...article }) => ({
        ...article,
        user: db.users.find((user) => user.id === userId),
    }))
    .slice(0, 4) as Article[]

const [article] = recommendations

const comments = db.comments
    .filter((comment) => comment.articleId === article.id)
    .map(({ userId, ...restComment }) => ({
        ...restComment,
        user: db.users.find((user) => user.id === userId),
    })) as Comment[]

generateAppStories(
    'pages/ArticleDetailsPage',
    ArticleDetailsPage,
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
                routePath: ROUTES.ARTICLE_DETAILS,
                routeParams: { articleId: '1' },
            },
            mockData: [
                {
                    url: '/comments?articleId=1&_expand=true',
                    method: 'GET',
                    status: 200,
                    response: comments,
                },
                {
                    url: '/articles/1?_expand=user',
                    method: 'GET',
                    status: 200,
                    response: article,
                },
                {
                    url: '/articles?_expand=user&_limit=4',
                    method: 'GET',
                    status: 200,
                    response: recommendations,
                },
            ],
        },
    }
)
