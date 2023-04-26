import { renderWithProviders } from '@/shared/lib/tests'

import { AvatarDropdown } from './AvatarDropdown'

describe('AvatarDropdown', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(<AvatarDropdown />)
        expect(baseElement).toBeInTheDocument()
    })
})
