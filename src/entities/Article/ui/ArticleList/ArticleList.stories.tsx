import { ArticleList } from './ArticleList'
import { generateAppStories } from 'shared/config/storybook/generateAppStories'
import db from '../../../../../json-server/db.json'
import { type Article } from '../../model'

const articles = db.articles.slice(0, 3).map(({ userId, ...article }) => ({
    ...article,
    user: db.users.find((user) => user.id === userId)!,
})) as Article[]

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
