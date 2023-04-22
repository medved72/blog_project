import { renderWithProviders } from '@/shared/lib/tests'
import AdminPanelPage from './AdminPanelPage'

describe('AdminPanelPage', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(<AdminPanelPage />)
        expect(baseElement).toBeInTheDocument()
    })
})
