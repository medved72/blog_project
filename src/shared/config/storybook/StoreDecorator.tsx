import { type DecoratorFn } from '@storybook/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import { type DeepPartial } from '@reduxjs/toolkit'

export const StoreDecorator = (
    initialState: DeepPartial<AppState>
): DecoratorFn => {
    return function StoreDecorator(StoryComponent) {
        return (
            <StoreProvider initialState={initialState as AppState}>
                <StoryComponent />
            </StoreProvider>
        )
    }
}
