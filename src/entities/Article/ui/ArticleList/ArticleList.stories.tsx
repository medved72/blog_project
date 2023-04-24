import { generateAppStories } from '@/shared/config/storybook/generateAppStories'
import { articles } from '../../testing'
import { ArticleList } from './ArticleList'

const articlesMock = articles.slice(0, 3)

generateAppStories('entities/ArticleList', ArticleList, [
    {
        key: 'tile',
        args: {
            view: 'tile',
            articles: articlesMock,
        },
    },
    {
        key: 'list',
        args: {
            view: 'list',
            articles: articlesMock,
        },
    },
])
