import { type DecoratorFn } from '@storybook/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import { type DeepPartial } from '@reduxjs/toolkit'

export const StoreDecorator = (
    initialState: DeepPartial<GlbAppState>
): DecoratorFn => {
    return function StoreDecorator(StoryComponent) {
        return (
            <StoreProvider initialState={initialState as GlbAppState}>
                <StoryComponent />
            </StoreProvider>
        )
    }
}
