import { EditableProfileCardHeader } from './EditableProfileCardHeader'
import { renderWithProviders } from '../../../../shared/lib/tests'

describe('ProfilePageHeader', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(
            <EditableProfileCardHeader />
        )
        expect(baseElement).toBeInTheDocument()
    })
})
