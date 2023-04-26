import createAsyncCallback from '@loki/create-async-callback'
import { type ComponentStory } from '@storybook/react'

import { articles } from '@/entities/Article/testing'
import { getCommentsByArticleId } from '@/entities/Comment/testing'

import { ROUTES } from '@/shared/config/routes'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { generateAppStories } from '@/shared/config/storybook/generateAppStories'

import ArticleDetailsPage from './ArticleDetailsPage'

const recommendationsMock = articles.slice(0, 4)

const [articleMock] = recommendationsMock

const comments = getCommentsByArticleId(articleMock.id)

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => {
    const resolve = createAsyncCallback()

    setTimeout(() => {
        resolve()
    }, 10000)

    return <ArticleDetailsPage {...args} />
}

generateAppStories(
    'pages/ArticleDetailsPage',
    Template,
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
                    response: articleMock,
                },
                {
                    url: `${window.origin}/articles?_expand=user&_limit=4`,
                    method: 'GET',
                    status: 200,
                    response: recommendationsMock,
                },
            ],
        },
    }
)
