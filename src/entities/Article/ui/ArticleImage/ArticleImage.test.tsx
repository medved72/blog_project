import { renderWithProviders } from 'shared/lib/tests'
import { ArticleImage } from './ArticleImage'

describe('ArticleImage', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(<ArticleImage />)
        expect(baseElement).toBeInTheDocument()
    })
})
