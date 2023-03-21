import { ArticleList } from './ArticleList'
import { generateAppStories } from 'shared/config/storybook/generateAppStories'

generateAppStories('entities/ArticleList', ArticleList, [
    {
        key: 'primary',
        args: {},
    },
])
