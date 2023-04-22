import { renderWithProviders } from '@/shared/lib/tests'
import { Card } from './Card'

describe('Card', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(<Card />)
        expect(baseElement).toBeInTheDocument()
    })
})
