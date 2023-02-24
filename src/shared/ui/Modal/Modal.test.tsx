import { renderWithProviders } from 'shared/lib/tests'
import { Modal } from './Modal'
import { screen } from '@testing-library/react'

describe.only('Modal', () => {
    it('should render', () => {
        const { baseElement } = renderWithProviders(<Modal />)
        expect(baseElement).toBeInTheDocument()
    })

    it('should be closed', () => {
        renderWithProviders(<Modal />)
        expect(screen.getByTestId('modal')).not.toHaveClass('opened')
    })

    it('should be open', () => {
        renderWithProviders(<Modal isOpen={true} />)
        expect(screen.getByTestId('modal')).toHaveClass('opened')
    })
})
