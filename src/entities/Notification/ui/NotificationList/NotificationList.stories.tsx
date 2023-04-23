import { generateAppStories } from '@/shared/config/storybook/generateAppStories'
import { ROUTES } from '@/shared/config/routes'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { NotificationList } from './NotificationList'

generateAppStories(
    'entities/Notification/NotificationList',
    NotificationList,
    [
        {
            key: 'primary',
            args: {},
            decorators: [StoreDecorator({})],
        },
    ],
    {
        parameters: {
            reactRouter: {
                routePath: ROUTES.ARTICLE_DETAILS,
                routeParams: { articleId: '1' },
            },
            mockData: [
                {
                    url: `${window.origin}/notifications`,
                    method: 'GET',
                    status: 200,
                    response: [
                        {
                            id: '69d00ba8-64af-4425-a7f8-ed5f35c4223b',
                            description: 'enim voluptate rem rerum doloremque',
                            title: 'ducimus',
                            userId: '8d5ce8ed-4f90-4d48-93e9-c15563333b87',
                        },
                        {
                            id: 'd3f75c3b-94db-4ae4-9571-0c86d239e508',
                            description:
                                'doloremque minima rerum harum doloremque',
                            title: 'alias',
                            userId: '6f009917-49c2-44be-a3fc-8749592c4895',
                            href: '/admin',
                        },
                    ],
                },
            ],
        },
    }
)
