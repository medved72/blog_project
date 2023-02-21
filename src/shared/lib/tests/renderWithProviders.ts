import { type ReactElement } from 'react'
import { render, type RenderResult } from '@testing-library/react'
import {
    TestsProvidersWrapperFactory,
    type TestsProvidersWrapperFactoryProps,
} from './TestsProvidersWrapper'

export const renderWithProviders = (
    component: ReactElement,
    options?: TestsProvidersWrapperFactoryProps
): RenderResult => {
    return render(component, { wrapper: TestsProvidersWrapperFactory(options) })
}
