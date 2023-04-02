import { renderWithProviders } from 'shared/lib/tests'
import ArticleEditPage from './ArticleEditPage'

describe('ArticleEditPage', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(<ArticleEditPage />)
        expect(baseElement).toBeInTheDocument()
    })
})
