import { generateAppStories } from 'shared/config/storybook/generateAppStories'
import ArticlePage from './ArticlePage'

generateAppStories('pages/ArticlePage', ArticlePage, [
    {
        key: 'primary',
        args: {},
    },
])
