import ArticleRating from './ArticleRating'
import { generateAppStories } from '@/shared/config/storybook/generateAppStories'

generateAppStories('entities/ArticleRating', ArticleRating, [
    {
        key: 'primary',
        args: {
            articleId: '1',
        },
    },
])
