import { renderWithProviders } from '@/shared/lib/tests'

import { ArticlePageGreeting } from './ArticlePageGreeting'

describe('ArticlePageGreeting', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(<ArticlePageGreeting />)
        expect(baseElement).toBeInTheDocument()
    })
})
