import { renderWithProviders } from 'shared/lib/tests'
import ArticleCreatePage from './ArticleCreatePage'

describe('ArticleCreatePage', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(<ArticleCreatePage />)
        expect(baseElement).toBeInTheDocument()
    })
})
