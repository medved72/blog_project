import { type FC, type PropsWithChildren, Suspense } from 'react'

import { BrowserRouter } from 'react-router-dom'

import { DotsSpinner } from '@/shared/ui/Spinner'

import { AppThemeProvider } from './AppThemeProvider'
import { ErrorBoundary } from './ErrorBoundary'
import { StoreProvider } from './StoreProvider'

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
    return (
        <BrowserRouter>
            <StoreProvider>
                <ErrorBoundary>
                    <AppThemeProvider>
                        <Suspense fallback={<DotsSpinner />}>
                            {children}
                        </Suspense>
                    </AppThemeProvider>
                </ErrorBoundary>
            </StoreProvider>
        </BrowserRouter>
    )
}
