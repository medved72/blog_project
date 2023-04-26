import { renderWithProviders } from '@/shared/lib/tests'

import { ArticleDetails } from './ArticleDetails'

describe('ArticleDetails', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(<ArticleDetails id="1" />)
        expect(baseElement).toBeInTheDocument()
    })
})
