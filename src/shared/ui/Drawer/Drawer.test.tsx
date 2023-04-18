import { renderWithProviders } from 'shared/lib/tests'
import { Drawer } from './Drawer'

describe('Drawer', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(
            <Drawer onClose={jest.fn} opened={true} />
        )
        expect(baseElement).toBeInTheDocument()
    })
})
