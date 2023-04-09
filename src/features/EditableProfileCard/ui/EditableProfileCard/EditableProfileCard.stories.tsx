import { EditableProfileCard } from './EditableProfileCard'
import { generateAppStories } from 'shared/config/storybook/generateAppStories'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import db from '../../../../../json-server/db.json'

const profile = db.profile[0]

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
                    response: profile,
                },
            ],
        },
    }
)
