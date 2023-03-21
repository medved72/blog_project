import { ArticleListItem } from './ArticleListItem'
import { generateAppStories } from 'shared/config/storybook/generateAppStories'

generateAppStories('entities/ArticleList/ArticleListItem', ArticleListItem, [
    {
        key: 'primary',
        args: {},
    },
])
