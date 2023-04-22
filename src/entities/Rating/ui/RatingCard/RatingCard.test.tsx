import { renderWithProviders } from '@/shared/lib/tests'
import { RatingCard } from './RatingCard'

describe('RatingCard', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(<RatingCard />)
        expect(baseElement).toBeInTheDocument()
    })
})
