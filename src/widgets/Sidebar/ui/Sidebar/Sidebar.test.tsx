import { screen } from '@testing-library/react'

import { renderWithProviders } from '@/shared/lib/tests'

import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
    it('render', () => {
        renderWithProviders(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    it('toggle', async () => {
        const { userEvent } = renderWithProviders(<Sidebar />)

        await userEvent.click(screen.getByTestId('sidebar-toggle'))

        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})
