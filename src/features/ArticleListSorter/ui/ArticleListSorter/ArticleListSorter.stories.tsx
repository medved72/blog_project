import { ArticleListSorter } from './ArticleListSorter'
import { generateAppStories } from 'shared/config/storybook/generateAppStories'
import { action } from '@storybook/addon-actions'

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
