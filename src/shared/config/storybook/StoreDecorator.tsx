import { type DecoratorFn } from '@/@storybook/react/testing'
import { type DeepPartial } from '@/@reduxjs/toolkit/testing'
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
