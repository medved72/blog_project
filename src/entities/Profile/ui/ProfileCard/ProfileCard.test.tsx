import { renderWithProviders } from 'shared/lib/tests'
import { ProfileCard } from './ProfileCard'

describe('ProfileCard', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(
            <ProfileCard
                onChangeLastName={jest.fn()}
                onChangeFirstName={jest.fn()}
            />
        )
        expect(baseElement).toBeInTheDocument()
    })
})
