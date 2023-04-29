import { renderWithProviders } from '@/shared/lib/tests'

import { AddArticleCommentForm } from './AddArticleCommentForm'

describe('AddCommentForm', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(
            <AddArticleCommentForm articleId={'1'} />
        )
        expect(baseElement).toBeInTheDocument()
    })
})
