import { ArticleListSearch } from './ArticleListSearch'
import { generateAppStories } from 'shared/config/storybook/generateAppStories'

generateAppStories('features/ArticleListSearch', ArticleListSearch, [
    {
        key: 'primary',
        args: {},
    },
])
