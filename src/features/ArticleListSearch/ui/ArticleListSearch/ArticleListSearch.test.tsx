import { renderWithProviders } from 'shared/lib/tests'
import { ArticleListSearch } from './ArticleListSearch'

describe('ArticleListSearch', () => {
    it('should render', () => {
        const onChangeMock = jest.fn()
        const { baseElement } = renderWithProviders(
            <ArticleListSearch value="" onChange={onChangeMock} />
        )
        expect(baseElement).toBeInTheDocument()
    })
})
