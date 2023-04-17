import { NotificationItem } from './NotificationItem'
import { generateAppStories } from 'shared/config/storybook/generateAppStories'

generateAppStories('shared/Notification/NotificationItem', NotificationItem, [
    {
        key: 'primary',
        args: {},
    },
])
