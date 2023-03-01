import { type FC, type PropsWithChildren, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'shared/config/theme'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { StoreProvider } from './StoreProvider'

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
    return (
        <BrowserRouter>
            <StoreProvider>
                <ErrorBoundary>
                    <ThemeProvider>
                        <Suspense fallback={'... LOADING ...'}>
                            {children}
                        </Suspense>
                    </ThemeProvider>
                </ErrorBoundary>
            </StoreProvider>
        </BrowserRouter>
    )
}
