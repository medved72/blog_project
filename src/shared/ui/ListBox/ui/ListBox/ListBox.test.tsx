import { renderWithProviders } from 'shared/lib/tests'
import { ListBox } from './ListBox'

describe('ListBox', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(<ListBox items={[]} />)
        expect(baseElement).toBeInTheDocument()
    })
})
