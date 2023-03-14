import { renderWithProviders } from 'shared/lib/tests'
import { Code } from './Code'

describe('Code', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(<Code />)
        expect(baseElement).toBeInTheDocument()
    })
})
