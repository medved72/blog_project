import { ArticleListTabs } from './ArticleListTabs'
import { generateAppStories } from 'shared/config/storybook/generateAppStories'

generateAppStories('feature/ArticleListTabs', ArticleListTabs, [
    {
        key: 'primary',
        args: {},
    },
])
