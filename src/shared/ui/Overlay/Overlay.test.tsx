import { renderWithProviders } from '@/shared/lib/tests'

import { Overlay } from './Overlay'

describe('Overlay', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(<Overlay />)
        expect(baseElement).toBeInTheDocument()
    })
})
