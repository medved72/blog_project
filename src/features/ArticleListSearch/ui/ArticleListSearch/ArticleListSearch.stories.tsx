import { ArticleListSearch } from './ArticleListSearch'
import { generateAppStories } from '@/shared/config/storybook/generateAppStories'
import { action } from '@storybook/addon-actions'

generateAppStories('features/ArticleListSearch', ArticleListSearch, [
    {
        key: 'primary',
        args: {
            value: '',
            onChange: action('onChange'),
        },
    },
])
