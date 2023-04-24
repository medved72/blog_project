import { profiles } from '@/entities/Profile/testing'
import { generateAppStories } from '@/shared/config/storybook/generateAppStories'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { EditableProfileCard } from './EditableProfileCard'

const [profileMock] = profiles

generateAppStories(
    'features/EditableProfileCard',
    EditableProfileCard,
    [
        {
            key: 'primary',
            args: {
                profileId: '1',
            },
            decorators: [StoreDecorator({})],
        },
    ],
    {
        parameters: {
            mockData: [
                {
                    url: `/profile/1`,
                    method: 'GET',
                    status: 200,
                    response: profileMock,
                },
            ],
        },
    }
)
