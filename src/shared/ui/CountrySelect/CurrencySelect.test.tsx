import { renderWithProviders } from 'shared/lib/tests'
import { CountrySelect } from './CountrySelect'

describe('CountrySelect', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(<CountrySelect />)
        expect(baseElement).toBeInTheDocument()
    })
})
