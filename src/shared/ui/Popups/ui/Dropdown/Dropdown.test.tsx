import { Dropdown } from './Dropdown'
import { renderWithProviders } from '../../../../lib/tests'

describe('Dropdown', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(
            <Dropdown trigger={<></>} items={[]} />
        )
        expect(baseElement).toBeInTheDocument()
    })
})
