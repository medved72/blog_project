import { type FC, memo, useCallback, useState } from 'react'
import { NotificationList } from '@/entities/Notification'
import { classNames } from '@/shared/lib/classNames'
import { Button } from '@/shared/ui/Button'
import { Icon } from '@/shared/ui/Icon'
import NotificationIcon from '@/shared/assets/icons/notification-20-20.svg'
import { Popover } from '@/shared/ui/Popups'
import { Drawer } from '@/shared/ui/Drawer'
import { useIsMobile } from '@/shared/hooks/useIsMobile'
import classes from './NotificationButton.module.scss'

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton: FC<NotificationButtonProps> = memo((props) => {
    const { className } = props

    const isMobile = useIsMobile()

    const [isOpened, setIsOpened] = useState(false)

    const openDrawer = useCallback(() => {
        setIsOpened(true)
    }, [])

    const closeDrawer = useCallback(() => {
        setIsOpened(false)
    }, [])

    const trigger = (
        <Button onClick={openDrawer} theme="clear">
            <Icon Svg={NotificationIcon} inverted />
        </Button>
    )

    return (
        <>
            {!isMobile && (
                <Popover
                    className={classNames(classes.notificationButton, {}, [
                        className,
                    ])}
                    trigger={trigger}
                    direction="bottom-end"
                >
                    <NotificationList className={classes.notifications} />
                </Popover>
            )}
            {isMobile && (
                <>
                    {trigger}
                    <Drawer opened={isOpened} onClose={closeDrawer}>
                        <NotificationList />
                    </Drawer>
                </>
            )}
        </>
    )
})
NotificationButton.displayName = 'NotificationButton'
