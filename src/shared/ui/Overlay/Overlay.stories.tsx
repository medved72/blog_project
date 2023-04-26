import { generateAppStories } from '@/shared/config/storybook/generateAppStories'

import { Overlay } from './Overlay'

generateAppStories('shared/Overlay', Overlay, [
    {
        key: 'primary',
        args: {},
    },
])
