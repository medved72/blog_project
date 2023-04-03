import { HStack } from './HStack'
import { generateAppStories } from 'shared/config/storybook/generateAppStories'

generateAppStories('shared/Stack/HStack', HStack, [
    {
        key: 'primary',
        args: {},
    },
])
