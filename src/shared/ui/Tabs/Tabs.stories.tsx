import { Tabs } from './Tabs'
import { generateAppStories } from 'shared/config/storybook/generateAppStories'
import { action } from '@storybook/addon-actions'

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
