import { renderWithProviders } from 'shared/lib/tests'
import { ArticleRecommendations } from './ArticleRecommendations'

describe('ArticleRecommendations', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(<ArticleRecommendations />)
        expect(baseElement).toBeInTheDocument()
    })
})
