import { renderWithProviders } from 'shared/lib/tests'
import { Tabs } from './Tabs'

describe('Tabs', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(<Tabs />)
        expect(baseElement).toBeInTheDocument()
    })
})
