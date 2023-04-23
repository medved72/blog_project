import { generateAppStories } from '@/shared/config/storybook/generateAppStories'
import { NotificationButton } from './NotificationButton'

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
