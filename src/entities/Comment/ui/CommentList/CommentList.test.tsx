import { renderWithProviders } from '@/shared/lib/tests'
import { CommentList } from './CommentList'

describe('CommentList', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(<CommentList />)
        expect(baseElement).toBeInTheDocument()
    })
})
