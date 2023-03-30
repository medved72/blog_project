import { renderWithProviders } from 'shared/lib/tests'
import { ArticleListTabs } from './ArticleListTabs'

describe('ArticleListTabs', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(<ArticleListTabs />)
        expect(baseElement).toBeInTheDocument()
    })
})
