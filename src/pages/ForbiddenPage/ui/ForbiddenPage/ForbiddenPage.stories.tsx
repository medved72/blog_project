import { generateAppStories } from '@/shared/config/storybook/generateAppStories'

import ForbiddenPage from './ForbiddenPage'

generateAppStories('pages/ForbiddenPage', ForbiddenPage, [
    {
        key: 'primary',
        args: {},
    },
])
