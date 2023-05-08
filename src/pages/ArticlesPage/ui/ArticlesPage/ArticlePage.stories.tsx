import createAsyncCallback from '@loki/create-async-callback'
import { type ComponentStory } from '@storybook/react'

import { articlesMock } from '@/entities/Article/testing'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { generateAppStories } from '@/shared/config/storybook/generateAppStories'

import ArticlesPage from './ArticlesPage'

const articles = articlesMock.slice(0, 8)

const Template: ComponentStory<typeof ArticlesPage> = (args) => {
    const resolve = createAsyncCallback()

    setTimeout(() => {
        resolve()
    }, 10000)

    return <ArticlesPage {...args} />
}

generateAppStories(
    'pages/ArticlesPage',
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
                    url: '/articles?_expand=user&_page=0&_limit=20&_sort=createdAt&_order=asc&q=',
                    method: 'GET',
                    status: 200,
                    response: articles,
                },
            ],
        },
    }
)
