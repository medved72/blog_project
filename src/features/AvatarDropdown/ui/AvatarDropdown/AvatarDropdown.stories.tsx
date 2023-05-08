import { usersMock } from '@/entities/User/testing'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { generateAppStories } from '@/shared/config/storybook/generateAppStories'

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
                        authData: usersMock[0],
                    },
                }),
            ],
        },
    ]
)
