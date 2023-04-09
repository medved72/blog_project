import { renderWithProviders } from 'shared/lib/tests'
import { EditableProfileCard } from './EditableProfileCard'

describe('EditableProfileCard', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(<EditableProfileCard />)
        expect(baseElement).toBeInTheDocument()
    })
})
