import AdminPanelPage from './AdminPanelPage'
import { generateAppStories } from '@/shared/config/storybook/generateAppStories'

generateAppStories('pages/AdminPanelPage', AdminPanelPage, [
    {
        key: 'primary',
        args: {},
    },
])
