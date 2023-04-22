import { Overlay } from './Overlay'
import { generateAppStories } from '@/shared/config/storybook/generateAppStories'

generateAppStories('shared/Overlay', Overlay, [
    {
        key: 'primary',
        args: {},
    },
])
