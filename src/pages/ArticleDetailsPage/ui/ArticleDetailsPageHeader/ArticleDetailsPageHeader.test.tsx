import { renderWithProviders } from 'shared/lib/tests'
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader'

describe('ArticleDetailsPageHeader', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(
            <ArticleDetailsPageHeader />
        )
        expect(baseElement).toBeInTheDocument()
    })
})
