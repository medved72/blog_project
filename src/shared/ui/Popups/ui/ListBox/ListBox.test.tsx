import { ListBox } from './ListBox'
import { renderWithProviders } from '../../../../lib/tests'

describe('ListBox', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(<ListBox items={[]} />)
        expect(baseElement).toBeInTheDocument()
    })
})
