import { renderWithProviders } from '@/shared/lib/tests'

import { ArticleViewSelector } from './ArticleViewSelector'

describe('ArticleViewSelector', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(
            <ArticleViewSelector view="tile" onChange={jest.fn()} />
        )
        expect(baseElement).toBeInTheDocument()
    })
})
