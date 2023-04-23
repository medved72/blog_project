import { action } from '@storybook/addon-actions'
import { generateAppStories } from '@/shared/config/storybook/generateAppStories'
import { ArticleViewSelector } from './ArticleViewSelector'

generateAppStories('features/ArticleViewSelector', ArticleViewSelector, [
    {
        key: 'primary',
        args: {
            view: 'tile',
            onChange: action('onChange'),
        },
    },
])
