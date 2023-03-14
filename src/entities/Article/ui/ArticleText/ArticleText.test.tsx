import { renderWithProviders } from 'shared/lib/tests'
import { ArticleText } from './ArticleText'

describe('ArticleText', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(<ArticleText />)
        expect(baseElement).toBeInTheDocument()
    })
})
