import { renderWithProviders } from 'shared/lib/tests'
import ArticleDetailsPage from './ArticleDetailsPage'

describe('ArticleDetailsPage', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(<ArticleDetailsPage />)
        expect(baseElement).toBeInTheDocument()
    })
})
