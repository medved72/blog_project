import { type FC, memo } from 'react'

import { Card } from '@/shared/ui/Card'
import { Text } from '@/shared/ui/Text'
import { classNames } from '@/shared/lib/classNames'

import { type NotificationDto } from '../../model/types/notification.dto'

import classes from './NotificationItem.module.scss'

interface NotificationItemProps {
    className?: string
    notification: NotificationDto
}

export const NotificationItem: FC<NotificationItemProps> = memo((props) => {
    const { className, notification } = props

    const content = (
        <Card
            className={classNames(classes.notificationItem, {}, [className])}
            theme="outlined"
        >
            <Text title={notification.title} text={notification.description} />
        </Card>
    )

    if (notification.href) {
        return (
            <a
                className={classes.link}
                href={notification.href}
                target={'_blank'}
                rel="noreferrer"
            >
                {content}
            </a>
        )
    }

    return content
})
NotificationItem.displayName = 'NotificationItem'
