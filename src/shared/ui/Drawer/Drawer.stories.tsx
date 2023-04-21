import { Drawer } from './Drawer'
import { generateAppStories } from 'shared/config/storybook/generateAppStories'
import { action } from '@storybook/addon-actions'
import { type ComponentProps } from 'react'

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
