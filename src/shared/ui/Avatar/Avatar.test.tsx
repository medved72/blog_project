import { renderWithProviders } from 'shared/lib/tests'
import { Avatar } from './Avatar'

describe('Avatar', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(<Avatar />)
        expect(baseElement).toBeInTheDocument()
    })
})
