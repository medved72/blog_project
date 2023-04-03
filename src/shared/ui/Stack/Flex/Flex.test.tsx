import { renderWithProviders } from 'shared/lib/tests'
import { Flex } from './Flex'

describe('Flex', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(<Flex />)
        expect(baseElement).toBeInTheDocument()
    })
})
