import { renderWithProviders } from '@/shared/lib/tests'
import { ArticleListInfiniteLoader } from './ArticleListInfiniteLoader'

describe('ArticleListInfiniteLoader', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(
            <ArticleListInfiniteLoader />
        )
        expect(baseElement).toBeInTheDocument()
    })
})
