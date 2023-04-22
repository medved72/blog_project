import { renderWithProviders } from '@/shared/lib/tests'
import ArticleRating from './ArticleRating'

describe('ArticleRating', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(
            <ArticleRating articleId="1" />
        )
        expect(baseElement).toBeInTheDocument()
    })
})
