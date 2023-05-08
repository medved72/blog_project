import { generateAppStories } from '@/shared/config/storybook/generateAppStories'

import { ArticlePageGreeting } from './ArticlePageGreeting'

generateAppStories('features/ArticlePageGreeting', ArticlePageGreeting, [
    {
        key: 'primary',
        args: {},
    },
])
