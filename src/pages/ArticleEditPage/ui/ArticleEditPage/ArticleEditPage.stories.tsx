import { generateAppStories } from '@/shared/config/storybook/generateAppStories'

import ArticleEditPage from './ArticleEditPage'

generateAppStories('pages/ArticleEditPage', ArticleEditPage, [
    {
        key: 'primary',
        args: {},
    },
])
