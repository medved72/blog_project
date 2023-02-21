import { Counter } from './Counter'
import { renderWithProviders } from 'shared/lib/tests'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Counter', () => {
    it('should render', () => {
        renderWithProviders(<Counter />, {
            initialState: { counter: { value: 10 } },
        })

        expect(screen.getByTestId('value-title')).toHaveTextContent('10')
    })

    it('should increment', async () => {
        renderWithProviders(<Counter />, {
            initialState: { counter: { value: 10 } },
        })
        await userEvent.click(screen.getByTestId('increment-button'))
        expect(screen.getByTestId('value-title')).toHaveTextContent('11')
    })

    it('should decrement', async () => {
        renderWithProviders(<Counter />, {
            initialState: { counter: { value: 10 } },
        })
        await userEvent.click(screen.getByTestId('decrement-button'))
        expect(screen.getByTestId('value-title')).toHaveTextContent('9')
    })
})
