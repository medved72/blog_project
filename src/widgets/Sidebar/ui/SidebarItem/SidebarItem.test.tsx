import { generatePath } from 'react-router-dom'
import { renderWithProviders } from '@/shared/lib/tests'
import { ROUTES } from '@/shared/config/routes'
import MainIcon from '@/shared/assets/icons/main-20-20.svg'
import { SidebarItem } from './SidebarItem'

const item = {
    path: generatePath(ROUTES.MAIN),
    icon: MainIcon,
    i18nKey: 'Главная',
} as const

describe('SidebarItem', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(
            <SidebarItem item={item} collapsed={false} />
        )
        expect(baseElement).toBeInTheDocument()
    })
})
