import { renderWithProviders } from 'shared/lib/tests'
import { NotificationButton } from './NotificationButton'

describe('NotificationButton', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(<NotificationButton />)
        expect(baseElement).toBeInTheDocument()
    })
})
