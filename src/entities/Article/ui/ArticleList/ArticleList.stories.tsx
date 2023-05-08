import { generateAppStories } from '@/shared/config/storybook/generateAppStories'

import { ArticleList } from './ArticleList'
import { type Article, articlesMock } from '../../testing'

const articles = articlesMock.slice(0, 3) as Article[]

generateAppStories('entities/ArticleList', ArticleList, [
    {
        key: 'tile',
        args: {
            view: 'tile',
            articles,
        },
    },
    {
        key: 'list',
        args: {
            view: 'list',
            articles,
        },
    },
])
