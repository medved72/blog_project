import { renderWithProviders } from '@/shared/lib/tests'
import { Skeleton } from './Skeleton'

describe('Skeleton', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(<Skeleton />)
        expect(baseElement).toBeInTheDocument()
    })
})
