import { generateAppStories } from '@/shared/config/storybook/generateAppStories'
import { RatingCard } from './RatingCard'

generateAppStories('entities/RatingCard', RatingCard, [
    {
        key: 'primary',
        args: {},
    },
])
