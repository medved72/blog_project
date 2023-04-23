import { generateAppStories } from '@/shared/config/storybook/generateAppStories'
import { NotificationItem } from './NotificationItem'

generateAppStories('shared/Notification/NotificationItem', NotificationItem, [
    {
        key: 'primary',
        args: {
            notification: {
                userId: '1',
                title: 'title',
                id: '1',
                description: 'description',
            },
        },
    },
])
