import { Popover } from './Popover'
import { generateAppStories } from 'shared/config/storybook/generateAppStories'

generateAppStories('shared/Popups/Popover', Popover, [
    {
        key: 'primary',
        args: {
            trigger: 'Open popover',
            children: 'Content',
        },
    },
])
