import { renderWithProviders } from 'shared/lib/tests'
import { VStack } from './VStack'

describe('VStack', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(<VStack />)
        expect(baseElement).toBeInTheDocument()
    })
})
