import { renderWithProviders } from 'shared/lib/tests'
import { Dropdown } from './Dropdown'

describe('Dropdown', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(
            <Dropdown trigger={<></>} items={[]} />
        )
        expect(baseElement).toBeInTheDocument()
    })
})
