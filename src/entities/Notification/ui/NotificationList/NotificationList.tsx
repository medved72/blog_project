import { type FC, memo } from 'react'
import { useNotificationsListQuery } from '../../api/notification.api'
import { VStack } from '@/shared/ui/Stack'
import { NotificationItem } from '../NotificationItem'
import { Skeleton } from '@/shared/ui/Skeleton'

interface NotificationListProps {
    className?: string
}

export const NotificationList: FC<NotificationListProps> = memo((props) => {
    const { className } = props

    const { data, isLoading } = useNotificationsListQuery(undefined, {
        pollingInterval: 5000,
    })

    if (isLoading) {
        return (
            <VStack className={className} gap="16">
                <Skeleton width="100%" borderRadius="8px" height="80px" />
                <Skeleton width="100%" borderRadius="8px" height="80px" />
                <Skeleton width="100%" borderRadius="8px" height="80px" />
            </VStack>
        )
    }

    return (
        <VStack className={className} gap="16">
            {data?.map((notification) => (
                <NotificationItem
                    key={notification.id}
                    notification={notification}
                />
            ))}
        </VStack>
    )
})
NotificationList.displayName = 'NotificationList'
