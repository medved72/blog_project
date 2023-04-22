import { renderWithProviders } from '@/shared/lib/tests'
import { ArticleListItem } from './ArticleListItem'

describe('ArticleListItem', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(
            <ArticleListItem
                article={{
                    title: '',
                    type: [],
                    createdAt: '',
                    views: 0,
                    id: '1',
                    img: '',
                    blocks: [],
                    user: { username: '', id: '1', roles: ['ADMIN'] },
                    subtitle: '',
                }}
                view="tile"
            />
        )
        expect(baseElement).toBeInTheDocument()
    })
})
