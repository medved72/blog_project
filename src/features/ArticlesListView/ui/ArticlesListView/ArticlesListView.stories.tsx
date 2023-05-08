import createAsyncCallback from '@loki/create-async-callback'
import { type ComponentStory } from '@storybook/react'

import { articlesMock } from '@/entities/Article/testing'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { generateAppStories } from '@/shared/config/storybook/generateAppStories'

import { ArticlesListView } from './ArticlesListView'

const articles = articlesMock.slice(0, 8)

const Template: ComponentStory<typeof ArticlesListView> = (args) => {
    const resolve = createAsyncCallback()

    setTimeout(() => {
        resolve()
    }, 10000)

    return <ArticlesListView {...args} />
}

generateAppStories(
    'features/ArticlesListView',
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
