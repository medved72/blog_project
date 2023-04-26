import { renderWithProviders } from '@/shared/lib/tests'

import { AddCommentForm } from './AddCommentForm'

describe('AddCommentForm', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(
            <AddCommentForm
                onCommentTextChange={jest.fn()}
                onSendClick={jest.fn()}
                value="value"
            />
        )
        expect(baseElement).toBeInTheDocument()
    })
})
