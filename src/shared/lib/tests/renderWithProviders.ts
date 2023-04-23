import { type ReactElement } from 'react'
import { render } from '@testing-library/react'
import rtlUserEvent from '@testing-library/user-event'
import { mockedAxios } from './mockAxios'
import {
    TestsProvidersWrapperFactory,
    type TestsProvidersWrapperFactoryProps,
} from './TestsProvidersWrapper'

export { mockedAxios }

export const renderWithProviders = (
    component: ReactElement,
    options?: TestsProvidersWrapperFactoryProps
) => {
    const userEvent = rtlUserEvent.setup()

    return {
        userEvent,
        ...render(component, {
            wrapper: TestsProvidersWrapperFactory(options),
        }),
    }
}
