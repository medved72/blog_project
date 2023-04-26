import { rtkApi } from '@/shared/api/rtkApi'

import { type NotificationDto } from '../model/types/notification.dto'

const notificationApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        notificationsList: build.query<NotificationDto[], void>({
            query: () => ({
                url: '/notifications',
            }),
        }),
    }),
})

export const { useNotificationsListQuery } = notificationApi
