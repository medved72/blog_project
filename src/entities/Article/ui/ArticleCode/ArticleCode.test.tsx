import { renderWithProviders } from '@/shared/lib/tests'
import { ArticleCode } from './ArticleCode'

describe('ArticleCode', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(
            <ArticleCode block={{ type: 'CODE', id: '1', code: '' }} />
        )
        expect(baseElement).toBeInTheDocument()
    })
})
