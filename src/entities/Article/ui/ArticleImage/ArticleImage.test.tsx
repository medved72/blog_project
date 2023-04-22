import { renderWithProviders } from '@/shared/lib/tests'
import { ArticleImage } from './ArticleImage'

describe('ArticleImage', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(
            <ArticleImage block={{ id: '1', type: 'IMAGE', src: '' }} />
        )
        expect(baseElement).toBeInTheDocument()
    })
})
