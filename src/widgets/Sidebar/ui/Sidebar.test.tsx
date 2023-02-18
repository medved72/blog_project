import { screen } from '@testing-library/react'
import { Sidebar } from 'widgets/Sidebar'
import { renderWithProviders } from 'shared/lib/tests/renderWithProviders'
import userEvent from '@testing-library/user-event'

describe('Sidebar', () => {
  it('render', () => {
    renderWithProviders(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  it('toggle', async () => {
    renderWithProviders(<Sidebar />)
    await userEvent.click(screen.getByTestId('sidebar-toggle'))
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
