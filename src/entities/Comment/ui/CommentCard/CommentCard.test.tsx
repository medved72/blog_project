import { articlesMock } from '@/entities/Article/testing'

import { renderWithProviders } from '@/shared/lib/tests'

import { CommentCard } from './CommentCard'
import { getCommentsByArticleId } from '../../testing'

const [comment] = getCommentsByArticleId(articlesMock[0].id)

describe('CommentCard', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(
            <CommentCard comment={comment} />
        )
        expect(baseElement).toBeInTheDocument()
    })
})
