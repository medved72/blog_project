import { ArticleEditPage } from './ArticleEditPage'
import { generateAppStories } from 'shared/config/storybook/generateAppStories'

generateAppStories('pages/ArticleEditPage', ArticleEditPage, [
    {
        key: 'primary',
        args: {},
    },
])
