import { renderWithProviders } from 'shared/lib/tests'
import ArticlePage from './ArticlePage'

describe('ArticlePage', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(<ArticlePage />)
        expect(baseElement).toBeInTheDocument()
    })
})
