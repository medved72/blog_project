import { renderWithProviders } from 'shared/lib/tests'
import { CommentCard } from './CommentCard'
import { type CommentDto } from '../../model/types/comment'

const comment: CommentDto = {
    id: '1',
    text: 'text',
    user: { id: '1', username: 'username', roles: ['ADMIN'] },
}

describe('CommentCard', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(
            <CommentCard comment={comment} />
        )
        expect(baseElement).toBeInTheDocument()
    })
})
