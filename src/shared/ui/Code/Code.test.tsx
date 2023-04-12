import { renderWithProviders } from 'shared/lib/tests'
import { Code } from './Code'

describe('Code', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(<Code>123</Code>)
        expect(baseElement).toBeInTheDocument()
    })
})
