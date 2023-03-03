import { renderWithProviders } from 'shared/lib/tests'
import { Counter } from './Counter'
import { screen } from '@testing-library/react'

describe('Counter', () => {
    it('should render', () => {
        renderWithProviders(<Counter />, {
            initialState: { counter: { value: 10 } },
        })

        expect(screen.getByTestId('value-title')).toHaveTextContent('10')
    })

    it('should increment', async () => {
        const { user } = renderWithProviders(<Counter />, {
            initialState: { counter: { value: 10 } },
        })

        await user.click(screen.getByTestId('increment-button'))

        expect(screen.getByTestId('value-title')).toHaveTextContent('11')
    })

    it('should decrement', async () => {
        const { user } = renderWithProviders(<Counter />, {
            initialState: { counter: { value: 10 } },
        })

        await user.click(screen.getByTestId('decrement-button'))

        expect(screen.getByTestId('value-title')).toHaveTextContent('9')
    })
})
