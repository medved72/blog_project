import { generateAppStories } from '@/shared/config/storybook/generateAppStories'
import { Card } from './Card'
import { Text } from '../../../Text'

generateAppStories('shared/Card', Card, [
    {
        key: 'primary',
        args: {
            children: <Text title="title" text="text" />,
        },
    },
])
