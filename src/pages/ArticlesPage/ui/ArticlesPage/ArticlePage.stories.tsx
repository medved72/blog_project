import { generateAppStories } from 'shared/config/storybook/generateAppStories'
import ArticlesPage from './ArticlesPage'

generateAppStories('pages/ArticlesPage', ArticlesPage, [
    {
        key: 'primary',
        args: {},
    },
])
