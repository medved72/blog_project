import { Drawer } from './Drawer'
import { generateAppStories } from 'shared/config/storybook/generateAppStories'
import { action } from '@storybook/addon-actions'

generateAppStories('shared/Drawer', Drawer, [
    {
        key: 'primary',
        args: { onClose: action('onClose'), opened: true },
    },
])
