import { renderWithProviders } from 'shared/lib/tests'
import AddCommentForm from './AddArticleCommentForm'

describe('AddCommentForm', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(<AddCommentForm />)
        expect(baseElement).toBeInTheDocument()
    })
})
