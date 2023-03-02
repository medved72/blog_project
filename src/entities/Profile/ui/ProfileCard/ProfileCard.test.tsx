import { renderWithProviders } from 'shared/lib/tests'
import { ProfileCard } from './ProfileCard'

describe('ProfileCard', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(<ProfileCard />)
        expect(baseElement).toBeInTheDocument()
    })
})
