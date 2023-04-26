import { generateAppStories } from '@/shared/config/storybook/generateAppStories'

import AdminPanelPage from './AdminPanelPage'

generateAppStories('pages/AdminPanelPage', AdminPanelPage, [
    {
        key: 'primary',
        args: {},
    },
])
