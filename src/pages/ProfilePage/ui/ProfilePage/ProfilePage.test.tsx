import { renderWithProviders } from '@/shared/lib/tests'

import ProfilePage from './ProfilePage'

describe('ProfilePage', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(<ProfilePage />)
        expect(baseElement).toBeInTheDocument()
    })
})
