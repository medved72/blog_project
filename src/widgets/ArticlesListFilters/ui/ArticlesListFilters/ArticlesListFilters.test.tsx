import { renderWithProviders } from '@/shared/lib/tests'
import { ArticlesListFilters } from './ArticlesListFilters'

describe('ArticlesListFilters', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(<ArticlesListFilters />)
        expect(baseElement).toBeInTheDocument()
    })
})
