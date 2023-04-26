import { renderWithProviders } from '@/shared/lib/tests'

import { ArticleList } from './ArticleList'

describe('ArticleList', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(
            <ArticleList articles={[]} view="list" />
        )
        expect(baseElement).toBeInTheDocument()
    })
})
