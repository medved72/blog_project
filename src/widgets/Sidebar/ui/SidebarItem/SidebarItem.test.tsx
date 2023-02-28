import { renderWithProviders } from 'shared/lib/tests'
import { SidebarItem } from './SidebarItem'
import { itemsList } from '../../model/items'

describe('SidebarItem', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(
            <SidebarItem item={itemsList[0]} collapsed={false} />
        )
        expect(baseElement).toBeInTheDocument()
    })
})
