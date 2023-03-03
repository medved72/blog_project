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
        expect(getModal()).not.toHaveClass('opened')
    })

    it('should be open', async () => {
        renderWithProviders(<Modal isOpen={true} />)

        await waitFor(() => {
            expect(getModal()).toHaveClass('opened')
        })
    })

    it('should be valid render with renderMode default', async () => {
        const { user, rerender } = renderWithProviders(<Modal isOpen={false} />)
        expect(getModal()).toBeInTheDocument()
        expect(getModal()).not.toHaveClass('opened')

        rerender(<Modal isOpen={true} />)
        expect(getModal()).toBeInTheDocument()
        expect(getModal()).toHaveClass('modal')
        expect(getModal()).not.toHaveClass('opened')
        await waitFor(() => {
            expect(getModal()).toHaveClass('opened')
        })

        await user.click(getOverlay())

        await waitFor(() => {
            expect(getModal()).toHaveClass('isClosing')
        })

        await waitFor(() => {
            expect(getModal()).not.toHaveClass('opened')
        })
    })

    it('should be valid render with renderMode destroyOnClose', async () => {
        const { user, rerender } = renderWithProviders(
            <Modal isOpen={false} renderMode="destroyOnclose" />
        )
        expect(queryModal()).not.toBeInTheDocument()

        rerender(<Modal isOpen={true} renderMode="destroyOnclose" />)
        expect(getModal()).toBeInTheDocument()
        expect(getModal()).toHaveClass('modal')
        expect(getModal()).not.toHaveClass('opened')
        await waitFor(() => {
            expect(getModal()).toHaveClass('opened')
        })

        await user.click(getOverlay())
        await waitFor(() => {
            expect(getModal()).toHaveClass('isClosing')
        })

        await waitFor(() => {
            expect(queryModal()).not.toBeInTheDocument()
        })
    })

    it('should be valid render with renderMode lazy', async () => {
        const { user, rerender } = renderWithProviders(
            <Modal isOpen={false} renderMode="lazy" />
        )
        expect(queryModal()).not.toBeInTheDocument()

        rerender(<Modal isOpen={true} renderMode="lazy" />)
        expect(getModal()).toBeInTheDocument()
        expect(getModal()).toHaveClass('modal')
        expect(getModal()).not.toHaveClass('opened')
        await waitFor(() => {
            expect(getModal()).toHaveClass('opened')
        })

        await user.click(getOverlay())
        await waitFor(() => {
            expect(getModal()).toHaveClass('isClosing')
        })

        await waitFor(() => {
            expect(getModal()).not.toHaveClass('opened')
        })
    })
})

function queryModal() {
    return screen.queryByTestId('modal')
}
function getModal() {
    return screen.getByTestId('modal')
}

function getOverlay() {
    return screen.getByTestId('modal.overlay')
}
