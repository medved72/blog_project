import { action } from '@storybook/addon-actions'
import { generateAppStories } from '@/shared/config/storybook/generateAppStories'
import { ArticleListSorter } from './ArticleListSorter'

generateAppStories('features/ArticleListSorter', ArticleListSorter, [
    {
        key: 'primary',
        args: {
            order: 'asc',
            onChangeOrder: action('onChangeOrder'),
            onChangeSortBy: action('onChangeSortBy'),
            sortBy: 'title',
        },
    },
])
