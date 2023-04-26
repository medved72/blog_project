import { renderWithProviders } from '@/shared/lib/tests'

import { Popover } from './Popover'

describe('Popover', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(
            <Popover trigger={'trigger'}>children</Popover>
        )
        expect(baseElement).toBeInTheDocument()
    })
})
