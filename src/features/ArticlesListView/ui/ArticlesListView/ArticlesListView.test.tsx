import { renderWithProviders } from '@/shared/lib/tests'
import { ArticlesListView } from './ArticlesListView'

describe('ArticlesListView', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(<ArticlesListView />)
        expect(baseElement).toBeInTheDocument()
    })
})
