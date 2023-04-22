import { StarRating } from './StarRating'
import { generateAppStories } from '@/shared/config/storybook/generateAppStories'

generateAppStories('shared/StarRating', StarRating, [
    {
        key: 'primary',
        args: {},
    },
])
