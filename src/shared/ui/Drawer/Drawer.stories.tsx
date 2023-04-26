import { type ComponentProps } from 'react'

import { action } from '@storybook/addon-actions'

import { generateAppStories } from '@/shared/config/storybook/generateAppStories'

import { Drawer } from './Drawer'

generateAppStories(
    'shared/Drawer',
    (props: ComponentProps<typeof Drawer>) => {
        return <Drawer {...props} />
    },
    [
        {
            key: 'primary',
            args: {
                onClose: action('onClose'),
                opened: true,
                getContainer: () =>
                    document.querySelector('.sb-main-padded #root')!,
            },
        },
    ]
)
