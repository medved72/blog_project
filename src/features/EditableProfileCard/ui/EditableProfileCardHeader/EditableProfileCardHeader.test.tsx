import { renderWithProviders } from '../../../../shared/lib/tests'
import { EditableProfileCardHeader } from './EditableProfileCardHeader'

describe('ProfilePageHeader', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(
            <EditableProfileCardHeader />
        )
        expect(baseElement).toBeInTheDocument()
    })
})
