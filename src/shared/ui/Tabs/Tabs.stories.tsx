import { action } from '@storybook/addon-actions'

import { generateAppStories } from '@/shared/config/storybook/generateAppStories'

import { Tabs } from './Tabs'

generateAppStories('shared/Tabs', Tabs, [
    {
        key: 'primary',
        args: {
            value: 'value2',
            onTabClick: action('onTabClick'),
            tabs: [
                { value: 'value', content: 'content' },
                { value: 'value1', content: 'content1' },
                { value: 'value2', content: 'content2' },
            ],
        },
    },
])
