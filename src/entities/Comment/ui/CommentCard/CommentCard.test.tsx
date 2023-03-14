import { renderWithProviders } from 'shared/lib/tests'
import { CommentCard } from './CommentCard'

const comment = {
    id: '1',
    text: 'text',
    user: { id: '1', username: 'username' },
}

describe('CommentCard', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(
            <CommentCard comment={comment} />
        )
        expect(baseElement).toBeInTheDocument()
    })
})
