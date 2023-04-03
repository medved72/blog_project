import { VStack } from './VStack'
import { generateAppStories } from 'shared/config/storybook/generateAppStories'

generateAppStories('shared/Stack/VStack', VStack, [
    {
        key: 'primary',
        args: {},
    },
])
