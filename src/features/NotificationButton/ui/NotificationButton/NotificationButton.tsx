import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames'
import classes from './NotificationButton.module.scss'
import { Button } from 'shared/ui/Button'
import { Icon } from 'shared/ui/Icon'
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg'
import { NotificationList } from 'entities/Notification'
import { Popover } from 'shared/ui/Popups'

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton: FC<NotificationButtonProps> = memo((props) => {
    const { className } = props
    return (
        <Popover
            className={classNames(classes.notificationButton, {}, [className])}
            trigger={
                <Button theme="clear">
                    <Icon Svg={NotificationIcon} inverted />
                </Button>
            }
            direction="bottom-end"
        >
            <NotificationList className={classes.notifications} />
        </Popover>
    )
})
NotificationButton.displayName = 'NotificationButton'
