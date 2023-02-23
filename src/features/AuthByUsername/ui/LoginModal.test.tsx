import { screen } from '@testing-library/react'
import { renderWithProviders } from 'shared/lib/tests'
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

    it('should render LoginForm', () => {
        renderWithProviders(
            <LoginModal
                isOpen={true}
                onClose={jest.fn()}
                onLoginSuccess={jest.fn()}
            />
        )

        expect(screen.getByTestId('loginForm')).toBeInTheDocument()
    })

    it('should be closed', () => {
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
