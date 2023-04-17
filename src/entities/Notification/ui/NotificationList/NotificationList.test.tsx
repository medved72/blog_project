import { renderWithProviders } from 'shared/lib/tests'
import { NotificationList } from './NotificationList'

describe('NotificationList', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(<NotificationList />)
        expect(baseElement).toBeInTheDocument()
    })
})
