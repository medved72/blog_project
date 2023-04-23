import { generateAppStories } from '@/shared/config/storybook/generateAppStories'
import ArticleCreatePage from './ArticleCreatePage'

generateAppStories('pages/ArticleCreatePage', ArticleCreatePage, [
    {
        key: 'primary',
        args: {},
    },
])
