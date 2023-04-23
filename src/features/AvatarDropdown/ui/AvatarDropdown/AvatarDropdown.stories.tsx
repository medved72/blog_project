import { generateAppStories } from '@/shared/config/storybook/generateAppStories'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { AvatarDropdown } from './AvatarDropdown'

generateAppStories(
    'features/AvatarDropdown/AvatarDropdown/AvatarDropdown',
    AvatarDropdown,
    [
        {
            key: 'primary',
            args: {},
            decorators: [
                StoreDecorator({
                    user: {
                        authData: {
                            id: '10be387c-5214-4382-9204-d044b0651938',
                            username: 'admin',
                            roles: ['ADMIN'],
                            avatar: 'https://shorturl.at/vCO59',
                        },
                    },
                }),
            ],
        },
    ]
)
