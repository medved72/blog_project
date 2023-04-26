import { action } from '@storybook/addon-actions'

import { generateAppStories } from '@/shared/config/storybook/generateAppStories'

import { ArticleListTabs } from './ArticleListTabs'

generateAppStories('features/ArticleListTabs', ArticleListTabs, [
    {
        key: 'primary',
        args: {
            value: 'All',
            onTabClick: action('onTabClick'),
        },
    },
])
