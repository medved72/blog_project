import { renderWithProviders } from 'shared/lib/tests'
import { Select } from './Select'

describe('Select', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(<Select />)
        expect(baseElement).toBeInTheDocument()
    })
})
