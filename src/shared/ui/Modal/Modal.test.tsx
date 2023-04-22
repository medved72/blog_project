import { renderWithProviders } from '@/shared/lib/tests'
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
        const { rerender } = renderWithProviders(<Modal isOpen={false} />)

        expect(getModal()).toBeInTheDocument()

        expect(getModal()).toHaveClass('closed')

        rerender(<Modal isOpen={true} />)

        await waitFor(() => {
            expect(getModal()).not.toHaveClass('closed')
        })
        expect(getModal()).toHaveClass('openInProgress')

        await waitFor(() => {
            expect(getModal()).not.toHaveClass('openInProgress')
        })
        expect(getModal()).toHaveClass('opened')

        rerender(<Modal isOpen={false} />)
        await waitFor(() => {
            expect(getModal()).not.toHaveClass('opened')
        })
        expect(getModal()).toHaveClass('closeInProgress')

        await waitFor(() => {
            expect(getModal()).not.toHaveClass('closeInProgress')
        })
        expect(getModal()).toHaveClass('closed')
    })

    it('should call onClose', async () => {
        const onCloseMock = jest.fn()
        const { userEvent } = renderWithProviders(
            <Modal isOpen={true} onClose={onCloseMock} />
        )

        await userEvent.click(getOverlay())

        expect(onCloseMock).toBeCalled()
    })

    it('should be valid render with renderMode destroyOnClose', async () => {
        const { rerender } = renderWithProviders(
            <Modal isOpen={false} renderMode="destroyOnclose" />
        )

        expect(queryModal()).not.toBeInTheDocument()

        rerender(<Modal isOpen={true} renderMode="destroyOnclose" />)

        await waitFor(() => {
            expect(getModal()).not.toHaveClass('closed')
        })
        expect(getModal()).toHaveClass('openInProgress')

        await waitFor(() => {
            expect(getModal()).not.toHaveClass('openInProgress')
        })
        expect(getModal()).toHaveClass('opened')

        rerender(<Modal isOpen={false} renderMode="destroyOnclose" />)
        await waitFor(() => {
            expect(queryModal()).not.toBeInTheDocument()
        })
    })

    it('should be valid render with renderMode lazy', async () => {
        const { rerender } = renderWithProviders(
            <Modal isOpen={false} renderMode="lazy" />
        )

        expect(queryModal()).not.toBeInTheDocument()

        rerender(<Modal isOpen={true} renderMode="lazy" />)

        expect(getModal()).toHaveClass('openInProgress')

        await waitFor(() => {
            expect(getModal()).not.toHaveClass('openInProgress')
        })
        expect(getModal()).toHaveClass('opened')

        rerender(<Modal isOpen={false} renderMode="lazy" />)
        await waitFor(() => {
            expect(getModal()).not.toHaveClass('opened')
        })
        expect(getModal()).toHaveClass('closeInProgress')

        await waitFor(() => {
            expect(getModal()).not.toHaveClass('closeInProgress')
        })
        expect(getModal()).toHaveClass('closed')
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
