import { renderWithProviders } from 'shared/lib/tests'
import { ArticleCode } from './ArticleCode'

describe('ArticleCode', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(<ArticleCode />)
        expect(baseElement).toBeInTheDocument()
    })
})
