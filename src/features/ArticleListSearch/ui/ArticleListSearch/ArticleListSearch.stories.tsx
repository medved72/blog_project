import { action } from '@storybook/addon-actions'

import { generateAppStories } from '@/shared/config/storybook/generateAppStories'

import { ArticleListSearch } from './ArticleListSearch'

generateAppStories('features/ArticleListSearch', ArticleListSearch, [
    {
        key: 'primary',
        args: {
            value: '',
            onChange: action('onChange'),
        },
    },
])
