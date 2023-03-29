import { ArticlesListFilters } from './ArticlesListFilters'
import { generateAppStories } from 'shared/config/storybook/generateAppStories'

generateAppStories('widgets/ArticlesListFilters', ArticlesListFilters, [
    {
        key: 'primary',
        args: {},
    },
])
