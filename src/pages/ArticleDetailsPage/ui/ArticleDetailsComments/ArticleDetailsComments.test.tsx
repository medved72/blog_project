import { renderWithProviders } from 'shared/lib/tests'
import { ArticleDetailsComments } from './ArticleDetailsComments'

describe('ArticleDetailsComments', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(
            <ArticleDetailsComments articleId={'1'} />
        )
        expect(baseElement).toBeInTheDocument()
    })
})
