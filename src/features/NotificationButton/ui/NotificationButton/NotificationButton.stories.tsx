import { NotificationButton } from './NotificationButton'
import { generateAppStories } from '@/shared/config/storybook/generateAppStories'

generateAppStories(
    'features/NotificationButton/NotificationButton',
    NotificationButton,
    [
        {
            key: 'primary',
            args: {},
        },
    ]
)
