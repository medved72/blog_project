import { renderWithProviders } from 'shared/lib/tests'
import ForbiddenPage from './ForbiddenPage'

describe('ForbiddenPage', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(<ForbiddenPage />)
        expect(baseElement).toBeInTheDocument()
    })
})
