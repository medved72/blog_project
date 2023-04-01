import { Card } from './Card'
import { generateAppStories } from 'shared/config/storybook/generateAppStories'
import { Text } from 'shared/ui/Text'

generateAppStories('shared/Card', Card, [
    {
        key: 'primary',
        args: {
            children: <Text title="title" text="text" />,
        },
    },
])