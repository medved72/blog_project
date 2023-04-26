import { Button } from '../../../Button'
import { Dropdown } from './Dropdown'
import { generateAppStories } from '../../../../config/storybook/generateAppStories'

generateAppStories('shared/Popups/Dropdown', Dropdown, [
    {
        key: 'primary',
        args: {
            // eslint-disable-next-line i18next/no-literal-string
            trigger: <Button>Open</Button>,
            items: [
                { content: 'first' },
                { content: 'second' },
                { content: 'third' },
            ],
        },
    },
])
