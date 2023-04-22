import { renderWithProviders } from '@/shared/lib/tests'
import { ArticleCommentsList } from './ArticleCommentsList'

describe('ArticleCommentsList', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(
            <ArticleCommentsList articleId="1" />
        )
        expect(baseElement).toBeInTheDocument()
    })
})
