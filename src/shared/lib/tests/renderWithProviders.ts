import { mockedAxios } from './mockAxios'
import { type ReactElement } from 'react'
import { render } from '@testing-library/react'
import {
    TestsProvidersWrapperFactory,
    type TestsProvidersWrapperFactoryProps,
} from './TestsProvidersWrapper'

export { mockedAxios }

export const renderWithProviders = (
    component: ReactElement,
    options?: TestsProvidersWrapperFactoryProps
) => {
    return render(component, {
        wrapper: TestsProvidersWrapperFactory(options),
    })
}
