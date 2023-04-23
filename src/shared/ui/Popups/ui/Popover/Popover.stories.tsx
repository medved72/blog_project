import { generateAppStories } from '@/shared/config/storybook/generateAppStories'
import { Popover } from './Popover'

generateAppStories('shared/Popups/Popover', Popover, [
    {
        key: 'primary',
        args: {
            trigger: 'Open popover',
            children: 'Content',
        },
    },
])
