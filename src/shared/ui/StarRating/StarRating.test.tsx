import { renderWithProviders } from '@/shared/lib/tests'

import { StarRating } from './StarRating'

describe('StarRating', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(<StarRating />)
        expect(baseElement).toBeInTheDocument()
    })
})
