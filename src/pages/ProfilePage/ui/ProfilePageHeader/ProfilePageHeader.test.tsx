import { renderWithProviders } from 'shared/lib/tests'
import { ProfilePageHeader } from './ProfilePageHeader'

describe('ProfilePageHeader', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(<ProfilePageHeader />)
        expect(baseElement).toBeInTheDocument()
    })
})
