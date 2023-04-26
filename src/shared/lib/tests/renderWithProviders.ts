import { type ReactElement } from 'react'

import rtlUserEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'

import {
    TestsProvidersWrapperFactory,
    type TestsProvidersWrapperFactoryProps,
} from './TestsProvidersWrapper'
import { mockedAxios } from './mockAxios'

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
