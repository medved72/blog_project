import { type FC } from 'react'

import { AppProvider } from './AppProvider'

export const withProviders = <T extends Record<string, unknown>>(
    Component: FC<T>
): FC<T> => {
    const Wrapped: FC<T> = (props) => {
        return (
            <AppProvider>
                <Component {...props} />
            </AppProvider>
        )
    }
    Wrapped.displayName = Component.displayName
    return Wrapped
}
