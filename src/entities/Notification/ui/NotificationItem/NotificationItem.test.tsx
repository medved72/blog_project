import { renderWithProviders } from '@/shared/lib/tests'

import { NotificationItem } from './NotificationItem'

describe('NotificationItem', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(
            <NotificationItem
                notification={{
                    id: '1',
                    description: 'description',
                    title: 'title',
                    userId: '2',
                }}
            />
        )
        expect(baseElement).toBeInTheDocument()
    })
})
