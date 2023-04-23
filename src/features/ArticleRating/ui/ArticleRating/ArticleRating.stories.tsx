import { generateAppStories } from '@/shared/config/storybook/generateAppStories'
import ArticleRating from './ArticleRating'

generateAppStories('entities/ArticleRating', ArticleRating, [
    {
        key: 'primary',
        args: {
            articleId: '1',
        },
    },
])
