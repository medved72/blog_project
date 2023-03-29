import { renderWithProviders } from 'shared/lib/tests'
import { ArticleListSorter } from './ArticleListSorter'

describe('ArticleListSorter', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(<ArticleListSorter />)
        expect(baseElement).toBeInTheDocument()
    })
})
