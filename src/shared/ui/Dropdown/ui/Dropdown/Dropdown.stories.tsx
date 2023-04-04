import { Dropdown } from './Dropdown'
import { generateAppStories } from 'shared/config/storybook/generateAppStories'
import { Button } from '../../../Button'

generateAppStories('shared/Dropdown/Dropdown', Dropdown, [
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
