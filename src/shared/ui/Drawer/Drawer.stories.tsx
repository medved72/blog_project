import { Drawer, type DrawerProps } from './Drawer'
import { generateAppStories } from 'shared/config/storybook/generateAppStories'
import { action } from '@storybook/addon-actions'

generateAppStories(
    'shared/Drawer',
    (props: DrawerProps) => {
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
