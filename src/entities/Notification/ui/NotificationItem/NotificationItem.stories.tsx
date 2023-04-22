import { NotificationItem } from './NotificationItem'
import { generateAppStories } from '@/shared/config/storybook/generateAppStories'

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
