import { renderWithProviders } from '@/shared/lib/tests'
import { ArticleListSorter } from './ArticleListSorter'

describe('ArticleListSorter', () => {
    it('should render', () => {
        const onChangeOrderMock = jest.fn()
        const onChangeSortByMock = jest.fn()

        const { baseElement } = renderWithProviders(
            <ArticleListSorter
                sortBy="title"
                order="asc"
                onChangeOrder={onChangeOrderMock}
                onChangeSortBy={onChangeSortByMock}
            />
        )
        expect(baseElement).toBeInTheDocument()
    })
})
