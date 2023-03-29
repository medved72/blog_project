import { renderWithProviders } from 'shared/lib/tests'
import { ArticleListSearch } from './ArticleListSearch'

describe('ArticleListSearch', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(<ArticleListSearch />)
        expect(baseElement).toBeInTheDocument()
    })
})
