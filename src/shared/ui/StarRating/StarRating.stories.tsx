import { generateAppStories } from '@/shared/config/storybook/generateAppStories'
import { StarRating } from './StarRating'

generateAppStories('shared/StarRating', StarRating, [
    {
        key: 'primary',
        args: {},
    },
])
