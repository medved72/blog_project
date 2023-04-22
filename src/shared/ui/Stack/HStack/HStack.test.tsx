import { renderWithProviders } from '@/shared/lib/tests'
import { HStack } from './HStack'

describe('HStack', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(<HStack />)
        expect(baseElement).toBeInTheDocument()
    })
})
