import { ArticleViewSelector } from './ArticleViewSelector'
import { generateAppStories } from 'shared/config/storybook/generateAppStories'

generateAppStories('features/ArticleViewSelector', ArticleViewSelector, [
    {
        key: 'primary',
        args: {},
    },
])
