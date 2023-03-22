import { ArticlesListView } from './ArticlesListView'
import { generateAppStories } from 'shared/config/storybook/generateAppStories'

generateAppStories('features/ArticlesListView', ArticlesListView, [
    {
        key: 'primary',
        args: {},
    },
])
