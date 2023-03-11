import { renderWithProviders } from 'shared/lib/tests'
import { CurrencySelect } from './CurrencySelect'

describe('CurrencySelect', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(<CurrencySelect />)
        expect(baseElement).toBeInTheDocument()
    })
})
