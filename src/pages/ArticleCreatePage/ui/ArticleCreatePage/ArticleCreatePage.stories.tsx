import { ArticleCreatePage } from './ArticleCreatePage'
import { generateAppStories } from 'shared/config/storybook/generateAppStories'

generateAppStories('pages/ArticleCreatePage', ArticleCreatePage, [
    {
        key: 'primary',
        args: {},
    },
])
