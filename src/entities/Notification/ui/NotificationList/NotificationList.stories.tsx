import { NotificationList } from './NotificationList'
import { generateAppStories } from 'shared/config/storybook/generateAppStories'

generateAppStories('shared/Notification/NotificationList', NotificationList, [
    {
        key: 'primary',
        args: {},
    },
])
