import { renderWithProviders } from 'shared/lib/tests'
import { Modal } from './Modal'
import { screen, waitFor } from '@testing-library/react'

describe('Modal', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(<Modal />)
        expect(baseElement).toBeInTheDocument()
    })

    it('should be closed', () => {
        renderWithProviders(<Modal />)
        expect(screen.getByTestId('modal')).not.toHaveClass('opened')
    })

    it('should be open', async () => {
        renderWithProviders(<Modal isOpen={true} />)

        await waitFor(() => {
            expect(screen.getByTestId('modal')).toHaveClass('opened')
        })
    })
})
