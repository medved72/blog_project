import { renderWithProviders } from 'shared/lib/tests'
import ArticlesPage from './ArticlesPage'

describe('ArticlePage', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(<ArticlesPage />)
        expect(baseElement).toBeInTheDocument()
    })
})
