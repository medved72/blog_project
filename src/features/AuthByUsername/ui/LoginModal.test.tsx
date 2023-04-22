import { screen } from '@testing-library/react'
import { renderWithProviders } from '@/shared/lib/tests'
import { LoginModal } from './LoginModal'

describe('LoginModal', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(
            <LoginModal
                isOpen={true}
                onClose={jest.fn()}
                onLoginSuccess={jest.fn()}
            />
        )

        expect(baseElement).toBeTruthy()
    })

    it('should render LoginForm', async () => {
        renderWithProviders(
            <LoginModal
                isOpen={true}
                onClose={jest.fn()}
                onLoginSuccess={jest.fn()}
            />
        )

        expect(
            await screen.findByTestId('loginForm', {}, { timeout: 2000 })
        ).toBeInTheDocument()
    })

    it('should be closed', async () => {
        renderWithProviders(
            <LoginModal
                isOpen={false}
                onClose={jest.fn()}
                onLoginSuccess={jest.fn()}
            />
        )

        expect(screen.queryByTestId('loginForm')).not.toBeInTheDocument()
    })
})
