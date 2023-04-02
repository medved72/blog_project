import { renderWithProviders } from 'shared/lib/tests'
import { type TabItemValue, Tabs } from './Tabs'

describe('Tabs', () => {
    it('should render', () => {
        const tabs: TabItemValue[] = [{ value: '1', content: '1' }]
        const { baseElement } = renderWithProviders(
            <Tabs tabs={tabs} value="1" onTabClick={jest.fn} />
        )
        expect(baseElement).toBeInTheDocument()
    })
})
