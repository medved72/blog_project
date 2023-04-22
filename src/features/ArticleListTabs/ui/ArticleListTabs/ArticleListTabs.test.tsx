import { renderWithProviders } from '@/shared/lib/tests'
import { ArticleListTabs } from './ArticleListTabs'

describe('ArticleListTabs', () => {
    it('should render', () => {
        const onTabClickMock = jest.fn()
        const { baseElement } = renderWithProviders(
            <ArticleListTabs onTabClick={onTabClickMock} value="All" />
        )
        expect(baseElement).toBeInTheDocument()
    })
})
