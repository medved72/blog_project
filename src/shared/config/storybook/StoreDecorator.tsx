import { type DecoratorFn } from '@storybook/react'
import { type DeepPartial } from '@reduxjs/toolkit'

import { StoreProvider } from '@/app/providers/testing'

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
