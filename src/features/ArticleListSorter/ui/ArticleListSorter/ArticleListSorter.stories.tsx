import { ArticleListSorter } from './ArticleListSorter'
import { generateAppStories } from 'shared/config/storybook/generateAppStories'

generateAppStories('feature/ArticleListSorter', ArticleListSorter, [
    {
        key: 'primary',
        args: {},
    },
])
