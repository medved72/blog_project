import ForbiddenPage from './ForbiddenPage'
import { generateAppStories } from 'shared/config/storybook/generateAppStories'

generateAppStories('pages/ForbiddenPage', ForbiddenPage, [
    {
        key: 'primary',
        args: {},
    },
])
