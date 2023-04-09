import { EditableProfileCard } from './EditableProfileCard'
import { generateAppStories } from 'shared/config/storybook/generateAppStories'

generateAppStories('features/EditableProfileCard', EditableProfileCard, [
    {
        key: 'primary',
        args: {
            profileId: '1',
        },
    },
])
