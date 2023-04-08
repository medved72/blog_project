import { ArticleViewSelector } from './ArticleViewSelector'
import { generateAppStories } from 'shared/config/storybook/generateAppStories'
import { action } from '@storybook/addon-actions'

generateAppStories('features/ArticleViewSelector', ArticleViewSelector, [
    {
        key: 'primary',
        args: {
            view: 'tile',
            onChange: action('onChange'),
        },
    },
])
