import { type FC, memo, useCallback } from 'react'
import { Button } from 'shared/ui/Button'
import { useSelector } from 'react-redux'
import { selectors, actions } from '../model'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'

export const Counter: FC = memo(() => {
    const value = useSelector(selectors.value)
    const dispatch = useAppDispatch()

    const handleIncrement = useCallback(() => {
        dispatch(actions.increment())
    }, [dispatch])

    const handleDecrement = useCallback(() => {
        dispatch(actions.decrement())
    }, [dispatch])

    return (
        <div>
            <h1 data-testid="value-title"> {value}</h1>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button data-testid="increment-button" onClick={handleIncrement}>
                increment
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button data-testid="decrement-button" onClick={handleDecrement}>
                decrement
            </Button>
        </div>
    )
})
Counter.displayName = 'Counter'
