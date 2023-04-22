import { RatingCard } from './RatingCard'
import { generateAppStories } from '@/shared/config/storybook/generateAppStories'

generateAppStories('entities/RatingCard', RatingCard, [
    {
        key: 'primary',
        args: {},
    },
])
