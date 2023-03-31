import { ArticleRecommendations } from './ArticleRecommendations'
import { generateAppStories } from 'shared/config/storybook/generateAppStories'

generateAppStories('features/ArticleRecommendations', ArticleRecommendations, [
    {
        key: 'primary',
        args: {},
    },
])
