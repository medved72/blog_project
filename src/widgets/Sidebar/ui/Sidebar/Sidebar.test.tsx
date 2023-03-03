import { screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { renderWithProviders } from 'shared/lib/tests'

describe('Sidebar', () => {
    it('render', () => {
        renderWithProviders(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    it('toggle', async () => {
        const { user } = renderWithProviders(<Sidebar />)

        await user.click(screen.getByTestId('sidebar-toggle'))

        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})
