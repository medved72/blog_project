import { action } from '@storybook/addon-actions'

import { ListBox } from './ListBox'
import { generateAppStories } from '../../../../config/storybook/generateAppStories'

generateAppStories('shared/Popups/ListBox', ListBox, [
    {
        key: 'primary',
        args: {
            defaultValue: 'Выберите значение',
            onChange: action('onChange'),
            items: [
                { value: 'option 1', content: 'option 1' },
                { value: 'option 2', content: 'option 2' },
                { value: 'option 3', content: 'option 3' },
                { value: 'option 4', content: 'option 4', disabled: true },
                { value: 'option 5', content: 'option 5', disabled: true },
                { value: 'option 6', content: 'option 6' },
            ],
        },
    },
])
