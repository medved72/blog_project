import { AvatarDropdown } from './AvatarDropdown'
import { generateAppStories } from 'shared/config/storybook/generateAppStories'

generateAppStories(
    'features/AvatarDropdown/AvatarDropdown/AvatarDropdown',
    AvatarDropdown,
    [
        {
            key: 'primary',
            args: {},
        },
    ]
)
