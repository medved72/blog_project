import { ArticleListTabs } from './ArticleListTabs'
import { generateAppStories } from 'shared/config/storybook/generateAppStories'
import { action } from '@storybook/addon-actions'

generateAppStories('features/ArticleListTabs', ArticleListTabs, [
    {
        key: 'primary',
        args: {
            value: 'All',
            onTabClick: action('onTabClick'),
        },
    },
])
