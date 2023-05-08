import { renderWithProviders } from '@/shared/lib/tests'

import { ArticleListItem } from './ArticleListItem'
import { type Article, articlesMock } from '../../testing'

describe('ArticleListItem', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(
            <ArticleListItem article={articlesMock[0] as Article} view="tile" />
        )
        expect(baseElement).toBeInTheDocument()
    })
})
