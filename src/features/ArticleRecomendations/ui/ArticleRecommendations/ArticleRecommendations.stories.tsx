import { ArticleRecommendations } from './ArticleRecommendations'
import { generateAppStories } from 'shared/config/storybook/generateAppStories'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { type Article } from 'entities/Article'
import { type ComponentStory } from '@storybook/react'
import createAsyncCallback from '@loki/create-async-callback'
import db from '../../../../../json-server/db.json'

const Template: ComponentStory<typeof ArticleRecommendations> = (args) => {
    const resolve = createAsyncCallback()

    setTimeout(() => {
        resolve()
    }, 10000)

    return <ArticleRecommendations {...args} />
}

const articles = db.articles.slice(0, 4).map(({ userId, ...article }) => ({
    ...article,
    user: db.users.find((user) => user.id === userId)!,
})) as Article[]

generateAppStories(
    'features/ArticleRecommendations',
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
            mockData: [
                {
                    url: '/articles?_expand=user&_limit=4',
                    method: 'GET',
                    status: 200,
                    response: articles,
                },
            ],
        },
    }
)
