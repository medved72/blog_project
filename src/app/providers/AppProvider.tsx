import { type FC, type PropsWithChildren, Suspense } from 'react'

import { BrowserRouter } from 'react-router-dom'

import { DotsSpinner } from '@/shared/ui/Spinner'
import { ThemeProvider } from '@/shared/config/theme'

import { ErrorBoundary } from './ErrorBoundary'
import { StoreProvider } from './StoreProvider'

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
    return (
        <BrowserRouter>
            <StoreProvider>
                <ErrorBoundary>
                    <ThemeProvider>
                        <Suspense fallback={<DotsSpinner />}>
                            {children}
                        </Suspense>
                    </ThemeProvider>
                </ErrorBoundary>
            </StoreProvider>
        </BrowserRouter>
    )
}
